import {
  DeleteIcon1,
  DeleteIcon2,
  EditIcon,
  DeleteIcon1Editing,
  DeleteIcon2Editing,
  EditIconEditing,
} from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_ITEM,
  START_EDIT_ITEM,
  SET_ACTUAL_WEIGHT,
  SET_ACTUAL_PACKET_POINT,
  SET_ACTUAL_ID,
  SET_ACTUAL_FORM,
} from "../store/state/stateSlice";
import "../styles/Items.css";

const ListItem = (item) => {
  const { actualId, actualForm } = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(
      DELETE_ITEM({ id: item.id }),
      dispatch(SET_ACTUAL_ID("")),
      dispatch(SET_ACTUAL_PACKET_POINT("")),
      dispatch(SET_ACTUAL_WEIGHT(""))
    );
  };

  const editItemHandler = () => {
    if (actualId === "") {
      dispatch(
        START_EDIT_ITEM({
          id: item.id,
          weight: item.weight,
          packetPoint: item.packetPoint,
          date: item.date,
          form: item.form,
        })
      );
      dispatch(SET_ACTUAL_FORM(true));
    }
  };

  return (
    <li className="list">
      <div className="titlerow">
        <p className="datetitle">Dátum</p>
        <p className="packetpointtitle">Csomagpont neve</p>
        <p className="weighttitle">Küldemény súlya</p>
        <div className="deletebuttonp">
          {actualForm === true && <DeleteIcon1Editing />}
          {actualForm !== true && <DeleteIcon1 />}
        </div>
      </div>
      <div className="datarow">
        <p className="datevalue">{item.date}</p>
        <p className="packetpointvalue">{item.packetPoint}</p>
        <p className="weightvalue">{item.weight + " gramm"}</p>
        <div className="icons">
          {actualForm === true && (
            <button
              disabled={actualForm === true}
              className="deletebutton"
              onClick={deleteItemHandler}
              title="Please finish editing before deleting this item"
            >
              <DeleteIcon2Editing />
            </button>
          )}
          {actualForm !== true && (
            <button
              disabled={actualForm === true}
              className="deletebutton"
              onClick={deleteItemHandler}
            >
              <DeleteIcon2 />
            </button>
          )}
          {actualForm === true && (
            <button
              className="editbutton"
              onClick={editItemHandler}
              title="Please finish editing before editing this item"
            >
              <EditIconEditing />
            </button>
          )}
          {actualForm !== true && (
            <button className="editbutton" onClick={editItemHandler}>
              <EditIcon />
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
