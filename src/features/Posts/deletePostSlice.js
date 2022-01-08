import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {
    remove: (state) => {
      state.loading = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { remove, setLoading } = deletePostSlice.actions;

export default deletePostSlice.reducer;
