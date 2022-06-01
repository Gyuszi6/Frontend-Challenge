import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../store/items/itemsSlice";
import axios from "axios";
import "../styles/OrderForm.css";

const OrderForm = (item, editable) => {
  const [weight, setWeight] = useState("");
  const [packetPoint, setPacketPoint] = useState("");
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const regexForNumbers = /^[0-9\b]+$/;

  const fetchPacketPoints = async () => {
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
  };

  function addZero(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  const date = new Date();
  let year = date.getFullYear();
  let month = addZero(date.getMonth() + 1);
  let day = addZero(date.getDate());
  let hour = addZero(date.getHours());
  let min = addZero(date.getMinutes());
  let time = year + ". " + month + ". " + day + ". - " + hour + ":" + min;

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      ADD_ITEM({
        weight: weight + " gramm",
        packetPoint: packetPoint,
        date: time,
      })
    );

    setWeight("");
    setPacketPoint("");
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
            value={weight}
            onChange={(e) => {
              if (
                regexForNumbers.test(e.target.value) ||
                e.target.value === ""
              ) {
                setWeight(e.target.value);
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
            value={packetPoint}
            onChange={(e) => {
              setPacketPoint(e.target.value);
            }}
          />
          <datalist id="packetpoints">
            <option>{datas}</option>
          </datalist>
        </div>
        <button
          className="savebutton"
          type="submit"
          disabled={weight <= 0 || packetPoint === ""}
        >
          <div className="buttontext">Mentés</div>
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
