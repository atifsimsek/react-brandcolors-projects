import { createSlice } from "@reduxjs/toolkit";

const color = ""


export const ColorSlice = createSlice({
    name: "Color",
    initialState: {value :color},
    reducers: {
        setColor: (state, action) => {
           state.value = action.payload
        }

    }
})



export const colorReducer = ColorSlice.reducer
export const {setColor} = ColorSlice.actions

