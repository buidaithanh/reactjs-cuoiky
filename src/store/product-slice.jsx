import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    totalMoney: 0,
    totalProduct: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      state.totalMoney = state.totalMoney + newProduct.price;
      state.totalProduct++;
      const existingProductItemIndex = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      const existingItem = state.products[existingProductItemIndex];
      console.log("existingProductItemIndex", existingProductItemIndex);
      console.log("existingItem", existingItem);
      if (existingItem) {
        const updateItem = {
          ...existingItem,
          amount: existingItem.amount + newProduct.amount,
        };
        console.log(existingItem.amount, "amount");
        state.products[existingProductItemIndex] = updateItem;
      } else {
        state.products = [...state.products, newProduct];
        console.log(state.products, "state.products");
      }
    },
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingProductIndex = state.products.findIndex(product => product.id === id);
      const existingProduct = state.products[existingProductIndex];
      state.totalMoney = state.totalMoney - existingProduct.price;
      state.totalProduct--;
      if(existingProduct.amount === 1) {
        state.products = state.products.filter(product => product.id !== id);
      } else {
        const updateItem = {...existingProduct, amount: existingProduct.amount - 1};
        state.products[existingProductIndex] = updateItem;
      }
    },
  },
});

const { reducer, actions } = productSlice;
export const { addProductToCart, removeProductFromCart } = actions;
export default reducer;
