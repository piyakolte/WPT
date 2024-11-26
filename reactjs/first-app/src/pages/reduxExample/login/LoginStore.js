import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlicer"
import { thunk } from "redux-thunk";

export const loginStore=configureStore({
    reducer:{

        loginReducer
    },
    //middleware used for thunks
    middleware:(getDefaultmiddleware)=>getDefaultmiddleware().concat(thunk)

})

