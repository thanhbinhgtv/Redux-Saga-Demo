// import RecruitApi from "API/RecruitApi";
import { call, put, takeLatest } from "redux-saga/effects";
// import { getAllRecruit } from "./getAllRecruit.js";
import axios from "axios";
function* watchGetAllRecruit() {
    try {
        const result = yield call(async () => {
            return await axios.get("https://fakestoreapi.com/products/category/jewelery")
        });

        if (result && result.status === 200) {
            yield put({ type: "GET_ALL_RECRUIT_SUCCESS", payload: result });
        } else {
            yield put({ type: "GET_ALL_RECRUIT_FAILURE" });
        }
    } catch (error) {
        yield put({
            type: "GET_ALL_RECRUIT_FAILURE",
            payload: error.response.message,
        });
    }
}

function* Saga() {
    console.log('00000')
    yield takeLatest("GET_ALL_RECRUIT", watchGetAllRecruit);
}

export default Saga;