import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface LoginToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: LoginToggleState = {
  isOpen: false,
};

export const loginToggleSlice = createSlice({
  name: 'loginToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openLogin: (state) => {
      state.isOpen = true;
    },
    closeLogin: (state) => {
      state.isOpen = false;
    },
    toggleLogin: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openLogin, closeLogin, toggleLogin } = loginToggleSlice.actions;
export const selectIsLoginOpen = (state: RootState) => state.loginToggle.isOpen;
export default loginToggleSlice.reducer;