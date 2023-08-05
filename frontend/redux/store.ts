import { configureStore } from "@reduxjs/toolkit";
import loginToggleReducer from "@/features/loginToggleSlice";
import signupToggleReducer from "@/features/signupToggleSlice";
import forgetpasswordToggleReducer from "@/features/forgetpasswordToggleSlice";
import propertyemailToggleSlice from "@/features/propertyemailToggleSlice";
import propertyCallToggleSlice from "@/features/propertyCallToggleSlice";
import allFilterToggleSlice from "@/features/allFilterToggleSlice";

export const store = configureStore({
  reducer: {
    loginToggle: loginToggleReducer,
    signupToggle: signupToggleReducer,
    forgetPasswordToggle: forgetpasswordToggleReducer,
    propertyEmailToggle: propertyemailToggleSlice,
    propertyCallToggle: propertyCallToggleSlice,
    allFilterToggle: allFilterToggleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
