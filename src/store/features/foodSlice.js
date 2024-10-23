import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("food/fetchData", async () => {
  const req = await fetch("http://api-rcfood.vercel.app/data");
  const res = await req.json();
  return res;
});

const initialState = {
  discounts: [],
  food: [],
  error: "",
  loading: false,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.discounts = action.payload?.filter((item) => item.discount !== 0);
      state.food = action.payload;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default foodSlice.reducer;

export { fetchData };
