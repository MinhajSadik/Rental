import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface ForgetPasswordToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: ForgetPasswordToggleState = {
  isOpen: false,
};

export const forgetPasswordToggleSlice = createSlice({
  name: 'forgetPasswordToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openForgetPassword: (state) => {
      state.isOpen = true;
    },
    closeForgetPassword: (state) => {
      state.isOpen = false;
    },
    toggleForgetPassword: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openForgetPassword, closeForgetPassword, toggleForgetPassword } = forgetPasswordToggleSlice.actions;
export const selectIsForgetPasswordOpen = (state: RootState) => state.forgetPasswordToggle.isOpen;
export default forgetPasswordToggleSlice.reducer;