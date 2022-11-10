import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-dom';
import { addProductToCart, addFavouriteFood } from "../store/cart-slice";
function ItemCard({ imgSrc, name, ratings, price, itemId }) {
  const [isFavourite, setFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleAddToCart = () => {
    dispatch(
      addProductToCart({
        id: itemId,
        price,
        name,
        imgSrc,
        quantity: 1,
      })
    );
  };
  const handleFavourite = () => {
    dispatch(
      addFavouriteFood({
        id: itemId,
        name,
        imgSrc,
      })
    );
    setFavourite(!isFavourite);
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""} `}
        onClick={() => handleFavourite()}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} alt={name} className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {parseFloat(price).toFixed(2)}
            </h3>
          </div>
          <i className="addToCart" onClick={() => handleAddToCart()}>
            <AddRounded />
          </i>
          <i>
            <Link to="/detail">
                Detail
            </Link>
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
