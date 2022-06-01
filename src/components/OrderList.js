import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import "../styles/List.css";

const OrderList = (props) => {
  const items = useSelector((state) => state.items);
  return (
    <div>
      <p className="listtitle">Megrendelések</p>
      <ul>
        <div>
          {items.map((item) => (
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
