import { configureStore } from "@reduxjs/toolkit";
import modelSlice from "./modelSlice";


export default configureStore({
    reducer: {
        modelSlice: modelSlice
    }
});