import { configureStore} from "@reduxjs/toolkit";
import fetchReducer from "../Redux/fetchSlice"
export default configureStore({
    reducer:{
        fetchDatas:fetchReducer
    }
})