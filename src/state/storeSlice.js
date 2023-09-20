import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api"; 

const initialState = {
  products: [],
  categorizedProducts: [],
  currentProduct: null,
};

// Thunks

export const getProducts = createAsyncThunk(
  "getProducts",
  async () => {
    try {
      const response = await api.get("product");
      const { data } = response;
      console.log(response.data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getCategorizedProducts = createAsyncThunk(
  "getCategorizedProducts",

  async (category) => {
    try {
      const response = await api.get(`product/category/${category}`);
      console.log("🚀 ~ file: index.js:37 ~ response.data:", response.data)
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getCurrentProduct = createAsyncThunk(
  "getCurrentProduct",

  async (id) => {
    try {
      const response = await api.get(`product/${id}`);
      const { data } = response;
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);


const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getCategorizedProducts.fulfilled]: (state, action) => {
      state.categorizedProducts = action.payload;
    },
    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload[0];
    },
  }
});

export default storeSlice.reducer;
