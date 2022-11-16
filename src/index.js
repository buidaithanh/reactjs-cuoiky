import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Favourite from "./Components/Favourite";
import Detail from './Components/Detail';
import Introduces from "./Components/Introduces";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {" "}
        </Route>
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="/introduces" element={<Introduces />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
