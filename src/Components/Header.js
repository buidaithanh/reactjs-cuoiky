import React, { useState } from "react";
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import "./Header.scss";
import { useSelector } from "react-redux";
function Header() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const [isShowLogOut, setShowLogOut] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo"
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>{quantity}</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox" onClick={() => setShowLogOut(!isShowLogOut)}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt=""
          />
          {isShowLogOut && (
            <div className="logOut" onClick={handleLogout}>
              Logout
            </div>
          )}
        </div>
        <h2 className="userName">Vetrivel Ravi</h2>
      </div>
    </header>
  );
}

export default Header;
