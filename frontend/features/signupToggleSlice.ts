import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface SignupToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: SignupToggleState = {
  isOpen: false,
};

export const signupToggleSlice = createSlice({
  name: 'signupToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openSignup: (state) => {
      state.isOpen = true;
    },
    closeSignup: (state) => {
      state.isOpen = false;
    },
    toggleSignup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSignup, closeSignup, toggleSignup } = signupToggleSlice.actions;
export const selectIsSignupOpen = (state: RootState) => state.signupToggle.isOpen;
export default signupToggleSlice.reducer;