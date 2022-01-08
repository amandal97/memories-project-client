import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPosts } from "../api";
import { setPosts, setLoading } from "../features/Posts/postSlice";

function* handlePostsData() {
  try {
    const response = yield call(fetchPosts);
    yield put(setLoading(false));
    yield put(setPosts(response.data));
  } catch (err) {
    console.error(err);
    yield put(setLoading(false));
  }
}

export default function* watchForPostsData() {
  yield takeLatest("posts/fetchAllPosts", handlePostsData);
}
