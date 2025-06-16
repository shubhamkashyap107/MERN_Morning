import {configureStore} from "@reduxjs/toolkit"
import dataSliceReducer from "./dataSlice"

const store = configureStore({
    reducer : {
        data : dataSliceReducer
    }
})


export default store