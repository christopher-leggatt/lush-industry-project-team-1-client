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
      if (!foundProduct) {
        state.push({ ...action.payload.product });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.count++;
      }
    },
    decreaseCount: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product && product.count > 0) {
        product.count--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
