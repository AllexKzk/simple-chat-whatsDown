import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMessage, IMessageStory } from "../api/interfaces";

function initState() {
    const localMessageStory = localStorage.getItem('story');    //{number: "IMessage[]", ...}
    if (localMessageStory){
        return JSON.parse(localMessageStory);
    }
    return {};
}

export const MessageSlice = createSlice({
    name: 'Story',
    initialState: initState() as IMessageStory,
    reducers: {
        storeContact(state, action: PayloadAction<string>){
            return {...state, [action.payload]: []};
        },
        storeMessage(state, action: PayloadAction<{wId: string, message: IMessage}>){
            const wId = action.payload.wId;
            const wIdStory = current(state)[wId] || [];
            return {...state, [wId]: wIdStory.concat(action.payload.message)};
        },
    }
});

export default MessageSlice.reducer;
export const {storeContact, storeMessage} = MessageSlice.actions;