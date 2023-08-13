import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface PropertyCallToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: PropertyCallToggleState = {
  isOpen: false,
};

export const propertyCallToggleSlice = createSlice({
  name: 'propertyCallToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPropertyCall: (state) => {
      state.isOpen = true;
    },
    closePropertyCall: (state) => {
      state.isOpen = false;
    },
    togglePropertyCall: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openPropertyCall, closePropertyCall, togglePropertyCall } = propertyCallToggleSlice.actions;
export const selectIsPropertyCallOpen = (state: RootState) => state.propertyCallToggle.isOpen;
export default propertyCallToggleSlice.reducer;