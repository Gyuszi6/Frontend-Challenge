import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ITEM,
  SET_ACTUAL_WEIGHT,
  SET_ACTUAL_PACKET_POINT,
  SET_ACTUAL_ID,
  SAVE_EDITED_ITEM,
} from "../store/state/stateSlice";
import axios from "axios";
import "../styles/OrderForm.css";
import { options } from "./Options";

const OrderForm = () => {
  const { actualWeight, actualPacketPoint, actualId } = useSelector(
    (state) => state.state
  );
  const dispatch = useDispatch();
  const regexForNumbers = /^[0-9\b]+$/;

  /*const fetchPacketPoints = async () => {
    const response = await axios.get("https://cdn.fuvar.hu/dev/points.json");
    const transformedData = response.data.map((packetPoints) => {
      return {
        id: packetPoints.title,
        title: packetPoints.title,
        city: packetPoints.city,
        address: packetPoints.address,
      };
    });
    setDatas(transformedData);
    console.log(datas);
  };*/

  function addZero(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    let year = date.getFullYear();
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());
    let hour = addZero(date.getHours());
    let min = addZero(date.getMinutes());
    let time = year + ". " + month + ". " + day + ".  -" + hour + ":" + min;
    const inputData = {
      weight: actualWeight,
      packetPoint: actualPacketPoint,
      date: time,
    };
    if (actualId) {
      dispatch(SAVE_EDITED_ITEM(inputData));
      dispatch(SET_ACTUAL_ID(""));
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
