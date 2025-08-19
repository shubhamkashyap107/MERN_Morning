import{createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name : "User",
    initialState : null,
    reducers : {
        addUserData : (state, action) => {
            // console.log(action.payload)
            return action.payload
        },
        addTask : (state, action) => {
            // console.log(state)
            state.todos.push(action.payload)
        },
        delTask : (state, action) => {
            const id = action.payload
            const filteredTasks = state.todos.filter((item) => {
                return item._id != id
            })
            state.todos = filteredTasks
        },
        editTask : (state, action) => {
            const newArr = []

            for(let item of state.todos)
            {
                if(item._id != action.payload._id)
                {
                    newArr.push(item)
                }
                else
                {
                    newArr.push(action.payload)
                }
            }

            state.todos = newArr
        }
    }
})



export default userSlice.reducer
export const{addUserData, addTask, delTask, editTask} = userSlice.actions