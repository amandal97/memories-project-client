import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: true,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchAllPosts: (state) => {
      state.loading = true;
    },
    setPosts: (state, action) => {
      state.items = action.payload;
    },
    setSpecificPost: (state, action) => {
      state.items = state.items.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    },
    deleteSpecificPost: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPosts,
  fetchAllPosts,
  setSpecificPost,
  setLoading,
  deleteSpecificPost,
} = postSlice.actions;

export default postSlice.reducer;
