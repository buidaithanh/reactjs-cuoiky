import { useSelector } from "react-redux";
import CartProductItem from "./CartProductItem";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import CartImage from "./CartImage";
import "./CartProducts.scss";

const CartProducts = () => {
  const products = useSelector((state) => state.products);
  const totalMoney = useSelector((state) => state.totalMoney);
  let content;
  if (products.length === 0) {
    content = (
      <div className="cart-products__empty">
        <CartImage />
        <p>Giỏ hàng của bạn còn trống</p>
        <Link to="/">Mua Ngay</Link>
      </div>
    );
  } else {
    content = (
      <ul className="cart-products__list">
        <h2>Sản Phẩm</h2>
        {products.map((item) => (
          <CartProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </ul>
    );
  }
  return (
    <Container>
      <div className="cart-products">{content}</div>
      <p className="total-money">
        Total: <span style={{
          color: 'red'
        }}>${+totalMoney.toFixed(2)}</span>
      </p>
    </Container>
  );
};

export default CartProducts;
