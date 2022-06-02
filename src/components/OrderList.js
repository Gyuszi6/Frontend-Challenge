import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import "../styles/List.css";

const OrderList = () => {
  const state = useSelector((state) => state.state);
  return (
    <div>
      <p className="listtitle">Megrendelések</p>
      <ul>
        <div>
          {state.items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              date={item.date}
              packetPoint={item.packetPoint}
              weight={item.weight}
              editing={item.editing}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default OrderList;
