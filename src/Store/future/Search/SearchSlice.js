import { createSlice } from "@reduxjs/toolkit";

const Search = "";

export const searchSlice = createSlice({
    name: "Search",
    initialState: { value:Search},
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload
        }

    }
})



export const searchReducer = searchSlice.reducer
export const {setSearch} = searchSlice.actions

