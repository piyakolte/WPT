import { configureStore } from "@reduxjs/toolkit";
import primeReducer from "./PrimeSlicer";

export  const primeStore=configureStore({
    reducer:
    {
        primeReducer:primeReducer
    }
})