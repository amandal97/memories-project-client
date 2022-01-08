import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/Posts/postSlice";
import createPost from "./features/Posts/createPostSlice";
import editPost from "./features/Posts/editPostSlice";
import deletePost from "./features/Posts/deletePostSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts,
    createPost,
    editPost,
    deletePost,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
