import { configureStore } from "@reduxjs/toolkit";
import eoReducer from "./EOSlicer"


export const eoStore=configureStore({
    reducer:{

        eoReducer:eoReducer
        //this counter property name use to access state variables in app view(CounterView)

    }
})