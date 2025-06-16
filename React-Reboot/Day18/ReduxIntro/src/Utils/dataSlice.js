import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : "Data",
    initialState : [],
    reducers : {
        addData : (state, action) => {
            // console.log(action.payload)
            state.push(action.payload)
        }
    }
})


export const {addData} = dataSlice.actions
export default dataSlice.reducer;
