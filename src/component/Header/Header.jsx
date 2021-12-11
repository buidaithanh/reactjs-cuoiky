import "./Header.scss";
import { Link } from "react-router-dom";
import { Home3, ShoppingCart } from "iconsax-react";
import Container from "../../UI/Container";
import { useSelector } from "react-redux";
const Header = () => {
  const totalProduct = useSelector(state => state.totalProduct)
  return (
    <header className="heading">
      <Container>
        <div className="heading-list">
          <Link to="/">
            <div className="home">
              <Home3 size="60" color="#FF8A65" />
            </div>
          </Link>
          <h3>MiNi E-Commerce</h3>
          <Link to="/cart">
            {" "}
            <div className="cart">
              <ShoppingCart size="60" color="#FF8A65" />
              <span className="cart-item">{totalProduct}</span>
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
