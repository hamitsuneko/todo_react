import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tasks from './taskSlice'
import deleted from './deletedSlice'
import completed from './completedSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({tasks, deleted, completed})


const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

export const persistor = persistStore(store)

export default store