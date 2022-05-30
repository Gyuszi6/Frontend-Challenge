import { DeleteIcon, EditIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { DELETE_ITEM, EDIT_ITEM } from "../store/items/itemsSlice";

const ListItem = (item) => {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch(DELETE_ITEM({ id: item.id }));
  };

  const editItemHandler = (item) => {
    dispatch(
      EDIT_ITEM({
        editing: !item.editing,
        weight: item.weight,
        packetPoint: item.packetPoint,
      })
    );
  };

  return (
    <li>
      <div>
        <p>Dátum</p>
        <p>Csomagpont neve</p>
        <p>Küldemény súlya</p>
      </div>
      <div>
        <button onClick={deleteItemHandler}>
          <DeleteIcon />
        </button>
        <button onClick={editItemHandler}>
          <EditIcon />
        </button>
      </div>
      <div>
        <p>{item.weight}</p>
        <p>{item.packetPoint}</p>
      </div>
    </li>
  );
};

export default ListItem;
