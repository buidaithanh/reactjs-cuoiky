import "./ProductDetailItem.scss";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/product-slice";
import { Back } from "iconsax-react";
const ProductDetailItem = (props) => {
  const { title, price, category, image, description, id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      addProductToCart({
        id,
        title,
        price,
        category,
        image,
        description,
        amount: 1,
      })
    );
  };
  return (
      <Container>
        <Link to={"/products"} className="back">
          <Back size="32" color="#FF8A65"/>
        </Link>
        <div className="product-detail__item">
          <div className="product-detail__item__image">
            <img src={image} alt={title} />
          </div>
          <div className="product-detail__item__content">
            <h3 className="product-detail__item__content-title" >{title}</h3>
            <h4 className="product-detail__item__content-price">
              ${price.toFixed(2)}
            </h4>
            <span className="product-detail__item__content-category">
              {category}
            </span>
            <p className="product-detail__item__content-description">
              Note: {description}
            </p>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>
      </Container>
  );
};

export default ProductDetailItem;
