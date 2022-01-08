import { call, put, select, takeLatest } from "redux-saga/effects";
import { deletePost } from "../api";
import { deleteSpecificPost } from "../features/Posts/postSlice";
import { setLoading } from "../features/Posts/deletePostSlice";

function* handleDeletePost(action) {
  try {
    yield call(deletePost, action.payload);
    yield put(setLoading(false));
    yield put(deleteSpecificPost(action.payload));
  } catch (err) {
    console.error(err);
    yield put(setLoading(false));
  }
}

export default function* watchForDeletePost() {
  yield takeLatest("deletePost/remove", handleDeletePost);
}
