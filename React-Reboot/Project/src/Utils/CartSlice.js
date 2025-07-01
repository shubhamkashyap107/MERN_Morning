import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        addItem : (state, action) => {

            let currItemId = action.payload.id
            let foundItem = state.find((item) => {
                return item.info.id == currItemId
            })

            if(!foundItem)
            {
                state.push({info : action.payload, quantity : 1})
            }
            else
            {
                for(let item of state)
                {
                    if(item.info.id == currItemId)
                    {
                        item.quantity = item.quantity + 1
                    }
                }
            }

        }
    }
})

export default cartSlice.reducer
export const { addItem } = cartSlice.actions