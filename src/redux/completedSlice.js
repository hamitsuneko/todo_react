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
               const x = state.completed.indexOf(action.payload)
                state.completed.splice(x, 1)
            } else if (!state.completed.includes(action.payload)) {
                state.completed.push(action.payload)
            }
        },
        deleteCompleted : (state, action) => {
            const item = state.completed.indexOf(action.payload)
            state.completed.splice(item, 1)
        }
    }})

export const {setCompleted, deleteCompleted} = completedSlice.actions

export default completedSlice.reducer