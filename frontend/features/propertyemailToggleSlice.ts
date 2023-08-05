import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface PropertyEmailToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: PropertyEmailToggleState = {
  isOpen: false,
};

export const propertyEmailToggleSlice = createSlice({
  name: 'propertyEmailToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPropertyEmail: (state) => {
      state.isOpen = true;
    },
    closePropertyEmail: (state) => {
      state.isOpen = false;
    },
    togglePropertyEmail: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openPropertyEmail, closePropertyEmail, togglePropertyEmail } = propertyEmailToggleSlice.actions;
export const selectIsPropertyEmailOpen = (state: RootState) => state.propertyEmailToggle.isOpen;
export default propertyEmailToggleSlice.reducer;