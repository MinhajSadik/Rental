import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

interface ShareToggleState {
  isOpen: boolean;
}

const initialState: ShareToggleState = {
  isOpen: false,
};

export const shareToggleSlice = createSlice({
  name: 'shareToggle',
  initialState,
  reducers: {
    openShareToggle: (state) => {
      state.isOpen = true;
    },
    closeShareToggle: (state) => {
      state.isOpen = false;
    },
    toggleShareToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openShareToggle, closeShareToggle, toggleShareToggle } = shareToggleSlice.actions;
export const selectIsShareToggleOpen = (state: RootState) => state.shareToggle.isOpen;
export default shareToggleSlice.reducer;