import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/Posts/fetchPostSlice";
import createPost from "./features/Posts/createPostSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts,
    createPost,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
