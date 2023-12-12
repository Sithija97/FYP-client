import { Provider } from "react-redux";
import { store } from "./store";
import { Login } from "./screens";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Login />
      </Provider>
    </>
  );
}
