import { configureStore } from "@reduxjs/toolkit";
import  CounterReducer  from "./CounterSlicer"

export const counterStore=configureStore({
    reducer:{

        counter:CounterReducer
        //this counter property name use to access state variables in app view(CounterView)

    }
})
