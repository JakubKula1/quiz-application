import { createSlice } from "@reduxjs/toolkit"

export const timeReducer = createSlice({
    name: 'time',
    initialState : {
        startTime: null,
        endTime: null
    },
    reducers : {
        setStartTime : (state) => {
            state.startTime = Date.now();
        },
        setEndTime : (state) => {
            state.endTime = Date.now();
        }
    }
})

export const { setStartTime, setEndTime } = timeReducer.actions;

export default timeReducer.reducer;