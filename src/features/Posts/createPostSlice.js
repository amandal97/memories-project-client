import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const createPostSlice = createSlice({
  name: "newPost",
  initialState,
  reducers: {
    createPost: (state) => {
      state.loading = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, createPost } = createPostSlice.actions;

export default createPostSlice.reducer;
