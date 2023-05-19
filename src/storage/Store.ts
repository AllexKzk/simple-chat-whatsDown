import { configureStore } from "@reduxjs/toolkit"
import MessageSlice from "./MessageSlice"
import ApiListener from "./ApiListener";

export const store = configureStore({ 
    reducer: {
        story: MessageSlice,
        listener: ApiListener
    } 
});

store.subscribe(() => {
    localStorage.setItem('story', JSON.stringify(store.getState().story));
});