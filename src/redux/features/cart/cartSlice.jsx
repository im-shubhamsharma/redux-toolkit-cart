import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  isLoading: true,
};

export const fetchData = createAsyncThunk("cart/fetchData", async (url) => {
  const res = await axios(url);
  return res.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // to clear whole cart
    clearCart: (state) => {
      state.cartItems = [];
    },

    // to remove items from cart
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    // to update total price and amount
    totalAmountPrice: (state) => {
      let { total, amount } = state.cartItems.reduce(
        (final, curr) => {
          final.amount += curr.amount;
          final.total += curr.price * curr.amount;
          return final;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      state.amount = amount;
      state.total = total;
    },

    // to increase and decrese item qunatity
    toggleQuantity(state, action) {
      const { id, type } = action.payload;
      state.cartItems = state.cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              amount: type === "inc" ? item.amount + 1 : item.amount - 1,
            }
          : item
      );
    },
  },

  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchData.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
    },

    [fetchData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, totalAmountPrice, toggleQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
