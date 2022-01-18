import { call, put, select, takeLatest } from "redux-saga/effects";
import { createPost } from "../api";
import { setPosts } from "../features/Posts/postSlice";
import { setLoading } from "../features/Posts/createPostSlice";

function* handleCreatePost(action) {
  try {
    const response = yield call(createPost, action.payload);
    yield put(setLoading(false));
    const posts = yield select((state) => state.posts.items);
    yield put(setPosts([...posts, response.data]));
  } catch (err) {
    console.error(err);
    yield put(setLoading(false));
  }
}

export default function* watchForCreatePost() {
  yield takeLatest("newPost/createPost", handleCreatePost);
}
