import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    completed : []
}

const completedSlice = createSlice({
    name : 'completed',
    initialState,
    reducers : {
        setCompleted: (state, action) => {
            if (state.completed.includes(action.payload)) {
               let x = state.completed.indexOf(action.payload)
                state.completed.splice(x, 1)
            } else if (!state.completed.includes(action.payload)) {
                state.completed.push(action.payload)
            }
        },
        deleteCompleted : (state, action) => {
            const nya = state.completed.indexOf(action.payload)
            state.completed.splice(nya, 1)
        }
    }})

export const {setCompleted, deleteCompleted} = completedSlice.actions

export default completedSlice.reducer