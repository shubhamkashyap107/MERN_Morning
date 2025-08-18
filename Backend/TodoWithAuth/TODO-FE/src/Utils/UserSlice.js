import{createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name : "User",
    initialState : null,
    reducers : {
        addUserData : (state, action) => {
            // console.log(action.payload)
            return action.payload
        }
    }
})



export default userSlice.reducer
export const{addUserData} = userSlice.actions