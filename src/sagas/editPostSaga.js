import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { likePost, editPost } from "../api";
import { setLoading } from "../features/Posts/editPostSlice";
import { setSpecificPost } from "../features/Posts/postSlice";

function* handleEditPost(action) {
  try {
    const response = yield call(editPost, action.payload);
    yield put(setLoading(false));
    yield put(setSpecificPost(response.data));
  } catch (err) {
    console.error(err);
    yield put(setLoading(false));
  }
}

function* handleLikePost(action) {
  try {
    const response = yield call(likePost, action.payload);
    yield put(setLoading(false));
    yield put(setSpecificPost(response.data));
  } catch (err) {
    console.error(err);
    yield put(setLoading(false));
  }
}

function* watchForEditPost() {
  yield takeLatest("editPost/updateSelectedPost", handleEditPost);
}

function* watchForLikePost() {
  yield takeLatest("editPost/updateLikePost", handleLikePost);
}

export default function* root() {
  yield all([fork(watchForEditPost), fork(watchForLikePost)]);
}
