import { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [orders, setOrders] = useState([]);

  const AddNewItem = (itemData) => {
    setOrders([...orders, itemData]);
  };
  return (
    <Provider store={store}>
      <div>
        <h1>Megrendelő űrlap</h1>
        <OrderForm onAddOrder={AddNewItem} />
        <h1>Megrendelések</h1>
        <OrderList items={orders} />
      </div>
    </Provider>
  );
}

export default App;
