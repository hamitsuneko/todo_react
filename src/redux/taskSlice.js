import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value : [],
    found : []
}

const taskSlice = createSlice({
        name: 'tasks',
        initialState,
        reducers: {
            setTask: (state, action) => {
                state.value.push(action.payload)
            },
            setMas: (state, action) => {
                state.value = action.payload
            },
            deleteAllTasks : (state) => {
                state.value.splice(0,state.value.length)
            },
            searchTasks : (state, action) => {
                state.found = state.value.filter(el => el.includes(action.payload))
            },
            setFoundMas : (state, action) => {
                state.found = action.payload
            },
            editTask : (state, action) => {
                state.value[action.payload[1]] = action.payload[0]
            }
        }
    }
)

export const {setTask, setMas, deleteAllTasks, searchTasks, setFoundMas, editTask} = taskSlice.actions

export default taskSlice.reducer