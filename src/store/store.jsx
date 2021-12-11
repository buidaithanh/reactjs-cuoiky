import productReducer from './product-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: productReducer
})

export default store;