import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMessage, IMessageStory } from "../api/interfaces";

function initState() {
    const localMessageStory = localStorage.getItem('story');    //{number: "IMessage[]", ...}
    if (localMessageStory)
        return JSON.parse(localMessageStory);                   //grab from localStorage
    return {};                                                  //or set by default
}

export const MessageSlice = createSlice({
    name: 'Story',
    initialState: initState() as IMessageStory,
    reducers: {
        storeContact(state, action: PayloadAction<string>){ //store new chat
            return {...state, [action.payload]: []};
        },
        storeMessage(state, action: PayloadAction<{wId: string, message: IMessage}>){ //store new message 
            const wId = action.payload.wId;
            const wIdStory = current(state)[wId] || [];                               //if chat opened || init new chat 
            return {...state, [wId]: wIdStory.concat(action.payload.message)};
        },
    }
});

export default MessageSlice.reducer;
export const {storeContact, storeMessage} = MessageSlice.actions;