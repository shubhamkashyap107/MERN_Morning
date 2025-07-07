import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { data } from "react-router-dom";


const cartSlice = createSlice({
    name : "Cart",
    initialState : {
        id : null,
        data : []
    },
    reducers : {
        addItem : (state, action) => {
            // console.log(action.payload)
            if(!state.id)
            {
                state.id = action.payload.resId
            }

            if(state.id != action.payload.resId)
            {
                toast.error("Cannot add items from different stores")
                return
            }
            else
            {
                const flag = state.data.find((item) => {
                    return item.id == action.payload.info.id
                })
                if(!flag)
                {
                    state.data.push({...action.payload.info, quantity : 1})
                    toast.success(`${action.payload.info.name} added to the cart`)
                }
                else
                {
                    for(let item of state.data)
                    {
                        if(item.id == action.payload.info.id)
                        {
                            item.quantity = item.quantity + 1
                        }
                    }
                    toast.success(`${action.payload.info.name} added to the cart`)


                }
            }
            
      
        },

        removeItem : (state, action) => {
            // console.log(action.payload.id)
            if(!state.data.length)
            {
                toast.error("Cart Empty")
                return 
            }

            for(let i = 0; i < state.data.length; i++)
            {
                console.log(state.data[i].id, action.payload.id)
                if(state.data[i].id == action.payload.id)
                {

                    if(state.data[i].quantity > 1)
                    {
                        state.data[i].quantity = state.data[i].quantity - 1
                    }
                    else
                    {
                        state.data.splice(i, 1)
                    }
                }
            }

        },

        clearCart : (state, action) => {
            state.data = []
        }
    }
})

export default cartSlice.reducer
export const { addItem, removeItem } = cartSlice.actions