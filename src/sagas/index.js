import { all, fork } from "redux-saga/effects";
import postSaga from "./postSaga";
import createPostSaga from "./createPostSaga";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(createPostSaga)]);
}
