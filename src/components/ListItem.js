import { DeleteIcon, EditIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { DELETE_ITEM, EDIT_ITEM } from "../store/items/itemsSlice";
import "../styles/Items.css";

const ListItem = (item) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(DELETE_ITEM({ id: item.id }));
  };

  const editItemHandler = () => {
    dispatch(
      EDIT_ITEM({
        id: item.id,
        weight: item.weight,
        packetPoint: item.packetPoint,
      })
    );
    const editable = { weight: item.weight, packetPoint: item.packetPoint };
    console.log(item.weight);
    console.log(item.packetPoint);
    return editable;
  };

  return (
    <li className="list">
      <div className="titlerow">
        <p className="datetitle">Dátum</p>
        <p className="packetpointtitle">Csomagpont neve</p>
        <p className="weighttitle">Küldemény súlya</p>
      </div>

      <div className="datarow">
        <p className="datevalue">{item.date}</p>
        <p className="packetpointvalue">{item.packetPoint}</p>
        <p className="weightvalue">{item.weight}</p>
        <div className="icons">
          <button className="button" onClick={deleteItemHandler}>
            <DeleteIcon />
          </button>
          <button className="button" onClick={editItemHandler}>
            <EditIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
