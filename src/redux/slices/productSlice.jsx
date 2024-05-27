import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial product state
const initialProduct = {
  originalData: [], // To store the original list of products
  data: [],
  cart: [],
  loading: false,
  error: null,
};

// Async thunk for middleware
let fetchProducts = createAsyncThunk("product/getProducts", async function () {
  try {
    let result = await axios.get(
      "https://65d5af42f6967ba8e3bc35a3.mockapi.io/blogs/v1/articles"
    );

    // Replace empty strings with null
    const finalData = result.data.map((product) => {
      const updatedProduct = { ...product };
      Object.keys(updatedProduct).forEach((k) => {
        if (updatedProduct[k] === "") {
          updatedProduct[k] = null;
        }
      });
      return updatedProduct;
    });

    return finalData;
  } catch (err) {
    throw err;
  }
});

// Product Slice
let productSlice = createSlice({
  name: "product",
  initialState: initialProduct,
  reducers: {
    // Add Product
    addProduct: (state, action) => {
      state.data = [...state.data, action.payload];
      state.originalData = [...state.originalData, action.payload];
      console.log("Afer product is added: ",state.data);
    },
    // Delete Product
    deleteProduct: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
      state.originalData = state.originalData.filter(
        (product) => product.id !== action.payload
      );
    },
    // Edit Product
    editProduct: (state, action) => {
      state.data = state.data.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.originalData = state.originalData.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      console.log("After edited: ",state.data);
    },
    // Add to Cart
    addToCart: (state, action) => {
      let exists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!exists) state.cart.push(action.payload);
    },
    // Remove from Cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    // Search Product
    searchProduct: (state, action) => {
      if (action.payload === "") {
        state.data = state.originalData;
      } else {
        state.data = state.originalData.filter((i) =>
          i.productName?.toLowerCase().startsWith(action.payload.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Complete
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.originalData = action.payload;
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      // Rejected
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export main reducer
export default productSlice.reducer;

// Export action creators
export const {
  addProduct,
  deleteProduct,
  editProduct,
  addToCart,
  removeFromCart,
  searchProduct,
} = productSlice.actions;

// Export thunk
export { fetchProducts };
