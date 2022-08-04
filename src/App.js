import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import "./App.scss";
import { Favorite, HomeRounded } from "@mui/icons-material";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"/"} icon={<HomeRounded />} active={"active"} />
          <MenuContainer link={"/favourite"} icon={<Favorite />} />
        </ul>
      </div>
    </div>
  );
}

export default App;
