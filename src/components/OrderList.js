import ListItem from "./ListItem";

import { useSelector } from "react-redux";

const OrderList = (props) => {
  const items = useSelector((state) => state.items);
  return (
    <ul>
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
    </ul>
  );
};

export default OrderList;
