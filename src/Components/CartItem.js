import React from "react";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeItemFromCart, addProductToCart } from "../store/cart-slice";
function CartItem(props) {
  const { name, imgSrc, price, itemId, quantity } = props;
  const dispatch = useDispatch();
  const handleRemoveProduct = () => {
    dispatch(removeItemFromCart(itemId));
  };
  const handleAddProduct = () => {
    dispatch(
      addProductToCart({
        name,
        imgSrc,
        price,
        quantity: 1,
        id: itemId,
      })
    );
  };
  return (
    <div className="cartItem">
      <div className="imgBox">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {quantity}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={handleRemoveProduct}
            />

            <AddRounded className="itemAdd" onClick={handleAddProduct} />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$ </span>
        <span className="itemPriceValue">{parseFloat(price).toFixed(2)}</span>
      </p>
    </div>
  );
}

export default CartItem;
