import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 2,
  total: 0,
};

const cartSlice = createSlice({
  name: "name",
  initialState,
  reducers: {},
});

export default cartSlice;
