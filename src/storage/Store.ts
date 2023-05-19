import { configureStore } from "@reduxjs/toolkit"
import MessageSlice from "./MessageSlice"

export const store = configureStore({ reducer: MessageSlice });

store.subscribe(() => {
    console.log('stored localy');
    localStorage.setItem('story', JSON.stringify(store.getState()));
});