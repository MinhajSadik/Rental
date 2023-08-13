import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

// Define a type for the slice state
interface AllFilterToggleState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: AllFilterToggleState = {
  isOpen: false,
};

export const allFilterToggleSlice = createSlice({
  name: 'allFilterToggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openAllFilter: (state) => {
      state.isOpen = true;
    },
    closeAllFilter: (state) => {
      state.isOpen = false;
    },
    toggleAllFilter: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openAllFilter, closeAllFilter, toggleAllFilter } = allFilterToggleSlice.actions;
export const selectIsAllFilterOpen = (state: RootState) => state.allFilterToggle.isOpen;
export default allFilterToggleSlice.reducer;