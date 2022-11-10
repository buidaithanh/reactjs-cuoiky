import React from "react";
import nofavoritefood from "../assets/nofavoritefood.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFavouriteFoodFromCart } from "../store/cart-slice";
import "./Favourite.scss";
function Favourite() {
  const dispatch = useDispatch();
  const favouriteFood = useSelector((state) => state.cart.favouriteFood);
  return (
    <>
      <div className="favouriteFood">
        <main>
          <div className="mainContainer">
            <div className="dishItemContainer">
              {favouriteFood && favouriteFood.length > 0 ? (
                favouriteFood.map((item) => {
                  return (
                    <div className="favouriteItem" key={item.id}>
                      <h3> {item.name}</h3>
                      <img src={item.imgSrc} alt={item.name} />
                      <button
                        className="deleteItem"
                        onClick={() =>
                          dispatch(removeFavouriteFoodFromCart({ id: item.id }))
                        }
                      >
                        Delete
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="noFavouriteFood">
                  <img src={nofavoritefood} alt="anh" />
                  <h3>No Favorite Food</h3>
                  <Link to={"/"}>Add some favorite foods</Link>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Favourite;
