import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.find(
        (product) => product.id === action.payload.product.id
      );
      if (foundProduct) {
        foundProduct.count++;
      } else {
        state.push({ ...action.payload.product, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.count++;
      }
    },
    decreaseCount: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product && product.count > 1) {
        product.count--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
