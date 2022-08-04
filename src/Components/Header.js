import React, { useState, useEffect, useRef } from "react";
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import { Items } from "./Data";
import "./Header.scss";
import { useSelector } from "react-redux";
import Home from "./Home";

function Header() {
  const [isShowLogOut, setShowLogOut] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [newItems, setNewItems] = useState(Items);
  const inputRef = useRef();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const emptyInput = (value) => {
    setSearchItem(value);
    inputRef.current.focus();
  };
  useEffect(() => {
    let newItems = Items.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setNewItems(newItems);
  }, [searchItem]);
  return (
    <>
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
          alt=""
          className="logo"
        />
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            value={searchItem}
            ref={inputRef}
          />
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
          </div>
          <h2 className="userName">Vetrivel Ravi</h2>
        </div>
      </header>
      <Home newItems={newItems} text={searchItem} emptyInput={emptyInput} />
    </>
  );
}

export default Header;
