import "./Products.scss";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import LoadingSpinner from "../../UI/LoadingSpinner";
import Container from "../../UI/Container";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      };

      fetchData().catch((error) => {
        setIsLoading(false);
        setApiError("Loi Duong chuyen");
      });
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (apiError) {
    return <p>{apiError}</p>;
  }
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="products">
        <Container>
          <ul className="products-list">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                category={product.category}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            ))}
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Products;
