import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface ApartmentVideoToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: ApartmentVideoToggleState = {
  isOpen: false,
};

export const apartmentVideoToggleSlice = createSlice({
  name: 'apartmentVideoToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openApartmentVideo: (state) => {
      state.isOpen = true;
    },
    closeApartmentVideo: (state) => {
      state.isOpen = false;
    },
    toggleApartmentVideo: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  openApartmentVideo,
  closeApartmentVideo,
  toggleApartmentVideo,
} = apartmentVideoToggleSlice.actions;

export const selectIsApartmentVideoOpen = (state: RootState) => state.apartmentVideoToggle.isOpen;

export default apartmentVideoToggleSlice.reducer;