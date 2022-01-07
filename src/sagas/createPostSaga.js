import { call, put, select, takeLatest } from "redux-saga/effects";
import { createPost } from "../api";
import { setPosts } from "../features/Posts/fetchPostSlice";
import { setLoading } from "../features/Posts/createPostSlice";

function* handleCreatePost(action) {
  try {
    yield call(createPost, action.payload);
    yield put(setLoading(false));
    const posts = yield select((state) => state.posts.items);
    yield put(setPosts([...posts, action.payload]));
  } catch (err) {
    console.log(err.message);
    yield put(setLoading(false));
  }
}

export default function* watchForCreatePost() {
  yield takeLatest("newPost/createPost", handleCreatePost);
}
