import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ITEM,
  SET_ACTUAL_WEIGHT,
  SET_ACTUAL_PACKET_POINT,
  SET_ACTUAL_ID,
  SAVE_EDITED_ITEM,
  SET_ACTUAL_FORM,
} from "../store/state/stateSlice";
import getActualDate from "./CurrentDate";
import "../styles/OrderForm.css";
import { options } from "./Options";
const OrderForm = () => {
  const { actualWeight, actualPacketPoint, actualId, actualForm } = useSelector(
    (state) => state.state
  );
  const dispatch = useDispatch();
  const regexForNumbers = /^[0-9\b]+$/;

  const submitHandler = (event) => {
    event.preventDefault();

    const inputData = {
      id: actualId,
      weight: actualWeight,
      packetPoint: actualPacketPoint,
      date: getActualDate(),
      form: actualForm,
    };
    if (actualId) {
      dispatch(SAVE_EDITED_ITEM(inputData));
      dispatch(SET_ACTUAL_ID(""));
      dispatch(SET_ACTUAL_FORM(!actualForm));
    } else {
      dispatch(ADD_ITEM(inputData));
    }
    dispatch(SET_ACTUAL_WEIGHT(""));
    dispatch(SET_ACTUAL_PACKET_POINT(""));
  };

  return (
    <div>
      <p className="formtitle">Megrendelő űrlap</p>
      <form className="orderform" onSubmit={submitHandler}>
        <div>
          <div>
            <p className="weight">Küldemény súlya</p>
          </div>
          <input
            className="weightinput"
            type="text"
            min="0"
            id="weight"
            value={actualWeight}
            onChange={(e) => {
              if (
                regexForNumbers.test(e.target.value) ||
                e.target.value === ""
              ) {
                dispatch(SET_ACTUAL_WEIGHT(e.target.value));
              }
            }}
            placeholder="gramm"
          />
        </div>
        <div>
          <div>
            <p className="packetpoint">Csomagpont</p>
          </div>
          <input
            className="packetpointinput"
            type="text"
            list="packetpoints"
            value={actualPacketPoint}
            onChange={(e) => {
              dispatch(SET_ACTUAL_PACKET_POINT(e.target.value));
            }}
          />
          <datalist id="packetpoints">
            {options.map((item) => (
              <option key={item.title}>
                {item.title},{item.address},{item.city}
              </option>
            ))}
          </datalist>
        </div>
        <button
          className="savebutton"
          type="submit"
          disabled={actualWeight <= 0 || actualPacketPoint === ""}
        >
          <div className="buttontext">Mentés</div>
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
