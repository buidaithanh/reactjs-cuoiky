import React from "react";
import { MenuItems, Items } from "./Data";
import ItemCard from "./ItemCard";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import BannerName from "./BannerName";
import SubMenuContainer from "./SubMenuContainer";
import DebitCard from "./DebitCard";

function Home({ newItems, text, emptyInput }) {
  const [isMainData, setMainData] = useState(Items);
  const [notify, setNotify] = useState("");
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  useEffect(() => {
    // menu li
    const menuLi = document.querySelectorAll("#menu li");
    function setMenuActive() {
      menuLi.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((item) => item.addEventListener("click", setMenuActive));
    // menu cards
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((item) =>
      item.addEventListener("click", setMenuCardActive)
    );
    // right Menu
    const mainContainer = document.querySelector(".mainContainer");
    const rightMenu = document.querySelector(".rightMenu");
    const shoppingCart = document.querySelector(".shoppingCart");
    shoppingCart.addEventListener("click", () => {
      mainContainer.classList.toggle("active");
      rightMenu.classList.toggle("active");
    });
  }, [isMainData, newItems]);
  useEffect(() => {
    if (newItems && newItems.length > 0) {
      setMainData(newItems);
    } else {
      setMainData([]);
      console.log("sai");
      setNotify(text);
    }
  }, [newItems, text]);
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
    console.log("empty");
    emptyInput("");
  };
  return (
    <main>
      <div className="mainContainer">
        <div className="banner">
          <BannerName name={"Vetri"} discount={"20"} link={"/introduces"} />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
            alt=""
            className="deliveryPic"
          />
        </div>
        <div className="dishContainer">
          <div className="menuCard">
            <SubMenuContainer name={"Menu Category"} />
          </div>
          <div className="rowContainer">
            {MenuItems &&
              MenuItems.length > 0 &&
              MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === 1 ? true : false}
                  />
                </div>
              ))}
          </div>
          <div className="dishItemContainer">
            {isMainData.length <= 0 && <h3>Không có sản phẩm "{notify}"</h3>}
            {isMainData &&
              isMainData.length > 0 &&
              isMainData.map((item) => (
                <div key={item.id}>
                  <ItemCard
                    imgSrc={item.imgSrc}
                    itemId={item.id}
                    name={item.name}
                    ratings={item.ratings}
                    price={item.price}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="rightMenu">
        <div className="debitCardContainer">
          <div className="debitCard">
            <DebitCard />
          </div>
        </div>

        <div className="cartCheckOutContainer">
          <div className="cartContainer">
            <SubMenuContainer name={"Carts Items"} />
            <div className="cartItems">
              {products &&
                products.length > 0 &&
                products.map((item) => (
                  <CartItem
                    name={item.name}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    itemId={item.id}
                    quantity={item.quantity}
                  />
                ))}
            </div>
          </div>

          <div className="totalSection">
            <h3>Total</h3>
            <p>
              <span>$ {parseInt(totalPrice).toFixed(2)}</span>
            </p>
          </div>
          <button className="checkOut">Check out </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
