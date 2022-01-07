import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts, fetchAllPosts, setLoading } = postSlice.actions;

export default postSlice.reducer;
