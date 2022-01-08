import { all, fork } from "redux-saga/effects";
import postSaga from "./postSaga";
import createPostSaga from "./createPostSaga";
import editPostSaga from "./editPostSaga";
import deletePostSaga from "./deletePostSaga";

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(createPostSaga),
    fork(editPostSaga),
    fork(deletePostSaga),
  ]);
}
