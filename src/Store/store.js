import { dataReducer } from "./future/Data/DataSlice";
import { colorReducer } from "./future/Color/ColorSlice";
import { searchReducer } from "./future/Search/SearchSlice"
import { selectedBrandsReducer } from "./future/Data/SelectedBrands";
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const rootReducer = combineReducers({
    dataReducer, colorReducer, searchReducer,selectedBrandsReducer
})


export const setupStore = () => {

    return configureStore({
        reducer: rootReducer
    })
}

