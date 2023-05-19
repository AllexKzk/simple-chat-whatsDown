import { createSlice } from "@reduxjs/toolkit";
import setListener from "../api/getMessage";

export const ApiListener = createSlice({
    name: 'Listener',
    initialState: false,
    reducers: {
        setApiListener(state) {
            console.log('set api', state);
            if (!state)
                setListener();
            return true;
        }
    }
});

export default ApiListener.reducer;
export const {setApiListener} = ApiListener.actions;