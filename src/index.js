import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Favourite from "./Components/Favourite";
// import Home from "./Components/Home";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {" "}
        </Route>
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
