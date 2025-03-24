import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {dialogReducer} from "./dialogs-reducer.ts";
import {profileReducer} from "./profile-reducer.ts";
import {sidebarReducer} from "./sidebar-reducer.ts";

const RootReducer = combineReducers({
    messagePage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootReducerType = ReturnType<typeof store.getState>