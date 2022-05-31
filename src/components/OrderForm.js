import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToList } from "../store/items/itemsActions";
import { ADD_ITEM } from "../store/items/itemsSlice";
import axios from "axios";
import "../styles/OrderForm.css";
import { produceWithPatches } from "immer";

const OrderForm = (item, editable) => {
  const [weight, setWeight] = useState("");
  const [packetPoint, setPacketPoint] = useState("");
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();

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

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
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
      <div>
        <h1 className="formtitle">Megrendelő űrlap</h1>
      </div>
      <div className="orderform">
        <form onSubmit={submitHandler}>
          <p className="weight">Küldemény súlya</p>
          <input
            className="weightinput"
            type="number"
            min="0"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="gramm"
          />
          <div>
            <label className="packetpoint">Csomagpont</label>
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
    </div>
  );
};

export default OrderForm;
