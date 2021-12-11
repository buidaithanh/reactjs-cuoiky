import "./CartProductItem.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../store/product-slice";
const CartProductItem = (props) => {
  const { title, price, image, id, amount } = props;
  const dispatch = useDispatch();
  const addToCarthandler = () => {
    console.log(price, "price");
    console.log("addtoCarthandler");
    dispatch(
      addProductToCart({
        id,
        title,
        price,
        image,
        amount: 1,
      })
    );
  };
  const removeProductFromCartHandler = () => {
    dispatch(removeProductFromCart(id));
    console.log("remove");
  };
  return (
    <li className="cart-products__list__item">
      <Link to={`/products/${id}`} className="cart-products__item">
        <div className="cart-products__item__image">
          <img style={{ width: "100px" }} src={image} alt={title} />
        </div>
        <div className="cart-products__item__content">
          <h4 title={title}>{props.title}</h4>
          <div className="cart-products__item__subcontent">
            <span> x{amount} Product</span>
            <span>${price.toFixed(2)}/Item</span>
          </div>
        </div>
      </Link>
      <div className="cart-products__list__item-caculator">
        <button onClick={addToCarthandler}>+</button>
        <button onClick={removeProductFromCartHandler}>-</button>
      </div>
    </li>
  );
};

export default CartProductItem;
