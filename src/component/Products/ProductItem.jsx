import "./ProductItem.scss";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <li title={props.title}>
      <Link className="product-item" to={`/products/${props.id}`}>
        <div className="product-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <h3>{props.title}</h3>
        <div className="product-item__price">
          <h2>${props.price.toFixed(2)}</h2>
        </div>
        <div className="product-item__category">
          <p>{props.category}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
