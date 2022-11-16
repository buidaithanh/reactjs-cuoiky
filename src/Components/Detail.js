import React from "react";
import { SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { Items } from "../Components/Data";
import "./Detail.scss";
function Detail() {
  const { productId } = useParams();
  const thisProduct = Items.find((item) => item.id === parseInt(productId));
  
  return (
    <>
    {/* <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo" />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input
          type="text"
          placeholder="Search"
          />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p></p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox" >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt="" />
        </div>
        <h2 className="userName">Vetrivel Ravi</h2>
      </div>
    </header> */}
    <div className="product-detail">
        <div className="img-product">
          <img
            src={thisProduct.imgSrc}
            alt={thisProduct.name}
          ></img>
        </div>
        <div className="desc-product">
          {/* <span className="home">Home</span>s */}
          <h1>
            {thisProduct.name}
          </h1>
          <h2 className="price">$ {thisProduct.price}</h2>
          
          <h3>Food detail</h3>
          <p className="desc">{thisProduct.desc}</p>
          <div className="add-to-cart">
            Add to cart
          </div>
        </div>
      </div></>
  );
}

export default Detail;
