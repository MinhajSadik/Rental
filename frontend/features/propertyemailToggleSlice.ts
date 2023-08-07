// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

interface PropertyEmailToggleState {
  isOpen: boolean;
}

const initialState: PropertyEmailToggleState = {
  isOpen: false,
};

export const propertyEmailToggleSlice = createSlice({
  name: 'propertyEmailToggle',
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