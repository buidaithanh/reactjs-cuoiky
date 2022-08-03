import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
    favouriteFood: [],
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      state.totalPrice = state.totalPrice + parseInt(newProduct.price);
      state.totalQuantity++;
      const existingProductItemIndex = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      const existingItem = state.products[existingProductItemIndex];
      if (existingItem) {
        const updateItem = {
          ...existingItem,
          quantity: existingItem.quantity + newProduct.quantity,
        };
        state.products[existingProductItemIndex] = updateItem;
      } else {
        state.products = [...state.products, newProduct];
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === id
      );
      const existingProduct = state.products[existingProductIndex];
      state.totalPrice = state.totalPrice - parseInt(existingProduct.price);
      state.totalQuantity--;
      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        const updateItem = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
        state.products[existingProductIndex] = updateItem;
      }
    },
    addFavouriteFood(state, action) {
      const newFood = action.payload;
      const existingItem = state.favouriteFood.find(
        (item) => item.id === newFood.id
      );
      // console.log(existingItem);
      if (!existingItem) {
        state.favouriteFood.push(newFood);
      } else {
        return;
      }
    },
    removeFavouriteFoodFromCart(state, action) {
      const id = action.payload.id;
      state.favouriteFood = state.favouriteFood.filter(
        (food) => food.id !== id
      );
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  addProductToCart,
  removeItemFromCart,
  addFavouriteFood,
  removeFavouriteFoodFromCart,
} = actions;
export default reducer;
