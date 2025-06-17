import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState : {},
    name : "user",
    reducers : {
        // addData : (state, action) => {
        //     // state.name = action.payload
        //     console.log(action.payload)
        //     state.details = action.payload
        // },
        addData : (state, action) => {
            return action.payload
        },
    }
})


export default userSlice.reducer;
export const{addData} = userSlice.actions