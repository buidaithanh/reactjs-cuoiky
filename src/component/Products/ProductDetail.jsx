import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailItem from "../Products/ProductDetailItem";
import "./ProductDetail.scss";
import LoadingSpinner from "../../UI/LoadingSpinner";

const ProductDetail = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchId = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${param.productId}`
        );
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      };
      fetchId();
      return () => {
        clearTimeout(timer);
      };
    }, 10);
  }, []);

  return (
    <div className="product-detail">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductDetailItem
          key={items.id}
          id={items.id}
          title={items.title}
          description={items.description}
          image={items.image}
          price={items.price}
          category={items.category}
        />
      )}
    </div>
  );
};

export default ProductDetail;
