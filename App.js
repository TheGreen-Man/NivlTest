import HomeScreen from "./app/HomeScreen";
import { Provider } from "react-redux";
import store from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
