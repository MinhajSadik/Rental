import { configureStore } from "@reduxjs/toolkit";
import loginToggleReducer from "@/features/loginToggleSlice";
import signupToggleReducer from "@/features/signupToggleSlice";
import forgetpasswordToggleReducer from "@/features/forgetpasswordToggleSlice";
import propertyemailToggleSlice from "@/features/propertyemailToggleSlice";
import propertyCallToggleSlice from "@/features/propertyCallToggleSlice";
import allFilterToggleSlice from "@/features/allFilterToggleSlice";
import userSlice from "@/features/user/userSlice";
import apiSlice from "@/features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    user: userSlice,
    loginToggle: loginToggleReducer,
    signupToggle: signupToggleReducer,
    forgetPasswordToggle: forgetpasswordToggleReducer,
    propertyEmailToggle: propertyemailToggleSlice,
    propertyCallToggle: propertyCallToggleSlice,
    allFilterToggle: allFilterToggleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
