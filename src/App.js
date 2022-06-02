import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <OrderForm />
      <OrderList />
    </Provider>
  );
}

export default App;
