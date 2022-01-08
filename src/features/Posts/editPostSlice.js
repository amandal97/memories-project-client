import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPostId: "",
  loading: false,
};

export const editPostSlice = createSlice({
  name: "editPost",
  initialState,
  reducers: {
    setSelectedPostId: (state, action) => {
      state.selectedPostId = action.payload;
    },
    updateSelectedPost: (state) => {
      state.loading = true;
    },
    updateLikePost: (state) => {
      state.loading = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelectedPostId,
  updateSelectedPost,
  setLoading,
  updateLikePost,
} = editPostSlice.actions;

export default editPostSlice.reducer;
