import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: []
}

export const selectedBrandsSlice = createSlice({

    name: "Selected",
    initialState: initialState,
    reducers: {
        setSelectedBrands: (state, action) => {

            if (state.data.includes(action.payload.slug)) {
                state.data = state.data.filter(slug => slug !== action.payload.slug)
            }
            else {
                state.data = [...state.data, action.payload.slug]
            }
        },

        clearSelected :(state,action) =>{

            state.data = action.payload

        }

    }
})



export const selectedBrandsReducer = selectedBrandsSlice.reducer
export const { setSelectedBrands,clearSelected } = selectedBrandsSlice.actions
