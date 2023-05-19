import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMessage, IMessageStory } from "../api/interfaces";

function initState() {
    const localMessageStory = localStorage.getItem('story');    //{number: "IMessage[]", ...}
    if (localMessageStory){
        return JSON.parse(localMessageStory);
    }
    return {};
}

const initialState: IMessageStory = initState();

export const MessageSlice = createSlice({
    name: 'Story',
    initialState,
    reducers: {
        storeContact(state, action: PayloadAction<string>){
            return {...state, [action.payload]: []};
        },
        storeMessage(state, action: PayloadAction<IMessageStory>){
            return  {...state, ...action.payload};
        }
    }
});

export default MessageSlice.reducer;
export const {storeContact, storeMessage} = MessageSlice.actions;