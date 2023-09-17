import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
  store: {
    products: [],
    categorizedProducts: [],
    currentProduct: null,
  },
  cart: {
    items: [],
  },
};

// Thunks

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await api.get("/products");
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
  "products/getCategorizedProducts",

  async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getCurrentProduct = createAsyncThunk(
  "products/getCurrentProduct",

  async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      const { data } = response;
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.cart.items.find(
        (product) => product.id === action.payload.product.id
      );
      if (foundProduct) {
        foundProduct.count++;
      } else {
        state.cart.items = [
          ...state.cart.items,
          { ...action.payload.product, count: 1 },
        ];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          if (!product.count) {
            product.count = 1;
          }
          product.count++;
        }
        return product;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (
          product.id === action.payload.id &&
          !!product.count &&
          product.count > 1
        ) {
          product.count--;
        }
        return product;
      });
    },
  },

  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.store.products = action.payload;
    },
    [getCategorizedProducts.fulfilled]: (state, action) => {
      state.store.categorizedProducts = action.payload;
    },
    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload[0];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  // ... you can add more exported actions here ...
} = stateSlice.actions;

export default stateSlice.reducer;
