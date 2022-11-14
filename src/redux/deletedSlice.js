import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    deleted: []
}

const deletedSlice = createSlice({
    name: 'deleted tasks',
    initialState,
    reducers: {
        setDeleted: (state, action) => {
            state.deleted.push(action.payload)

        },
        deleteAll: (state, action) => {
            state.deleted = [...state.deleted, ...action.payload]
        },
        deleteAll2 : (state) => {
            state.deleted = []
        },
        restore : (state, action) => {
            state.deleted.splice(action.payload , 1)
        }
    }
})

export const {setDeleted, deleteAll, deleteAll2, restore} = deletedSlice.actions

export default deletedSlice.reducer