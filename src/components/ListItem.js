import { DeleteIcon1, DeleteIcon2, EditIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { DELETE_ITEM, START_EDIT_ITEM } from "../store/state/stateSlice";
import "../styles/Items.css";

const ListItem = (item) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(DELETE_ITEM({ id: item.id }));
  };

  const editItemHandler = () => {
    dispatch(
      START_EDIT_ITEM({
        id: item.id,
        weight: item.weight,
        packetPoint: item.packetPoint,
      })
    );
  };

  return (
    <li className="list">
      <div className="titlerow">
        <p className="datetitle">Dátum</p>
        <p className="packetpointtitle">Csomagpont neve</p>
        <p className="weighttitle">Küldemény súlya</p>
        <div className="deletebuttonp">
          <DeleteIcon1 />
        </div>
      </div>
      <div className="datarow">
        <p className="datevalue">{item.date}</p>
        <p className="packetpointvalue">{item.packetPoint}</p>
        <p className="weightvalue">{item.weight + " gramm"}</p>
        <div className="icons">
          <button className="deletebutton" onClick={deleteItemHandler}>
            <DeleteIcon2 />
          </button>
          <button className="editbutton" onClick={editItemHandler}>
            <EditIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
