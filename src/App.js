import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import "./App.scss";
import {
  AccountBalanceWalletRounded,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
  Chat,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* header section */}
      <Header />
      {/* main section */}
      <Outlet />
      {/* footer section */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"/"} icon={<HomeRounded />} active={"active"} />
          <MenuContainer link={"/favourite"} icon={<Favorite />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
