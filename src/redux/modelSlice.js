import { createSlice } from "@reduxjs/toolkit";
import { chairColors, cushionColors } from "../constants";

const initialState = {
    chairMaterial: "leather",
    cushionMaterial: "fabric",
    legs: "modern",
    chairColor: chairColors[0],
    cushionColor: cushionColors[0]
}

const modelSlice = createSlice({
    name: "modelSlice",
    initialState,
    reducers: {
        setChairMaterial: (state, action)=>{
            state.chairMaterial = action.payload;
        },
        setCushionMaterial: (state, action)=>{
            state.cushionMaterial = action.payload;
        },
        setLegs: (state, action)=>{
            state.legs = action.payload;
        },
        setChairColor: (state, action)=>{
            state.chairColor = action.payload;
        },
        setCushionColor: (state, action)=>{
            state.cushionColor = action.payload;
        }
    }
});

export const {setChairMaterial, setCushionMaterial, setLegs, setChairColor, setCushionColor} = modelSlice.actions;
export default modelSlice.reducer;