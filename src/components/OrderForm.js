import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToList } from "../store/items/itemsActions";
import itemsSlice, { ADD_ITEM } from "../store/items/itemsSlice";

const OrderForm = (item) => {
  const [weight, setWeight] = useState("");
  const [packetPoint, setPacketPoint] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      ADD_ITEM({
        weight: weight,
        packetPoint: packetPoint,
        date: Date.now(),
      })
    );
    setWeight("");
    setPacketPoint("");
  };

  /*const dispatch = useDispatch();
  const { weight, packetPoint } = useSelector((state) => state.form);

  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      weight: weight,
      packetPoint: packetPoint,
    };
    dispatch(addItemToList(itemData));
    props.onAddOrder(itemData);

    setWeight("");
    setPacketPoint("");
  };*/

  return (
    <form onSubmit={submitHandler}>
      <p>Küldemény súlya</p>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        placeholder="gramm"
      />
      <p>Csomagpont</p>
      <input
        type="text"
        id="packetpoint"
        value={packetPoint}
        onChange={(e) => {
          setPacketPoint(e.target.value);
        }}
      />
      <button type="submit">Mentés</button>
    </form>
  );
};

export default OrderForm;
