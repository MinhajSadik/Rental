import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

interface SavePropertyToggleState {
  isOpen: boolean;
}

const initialState: SavePropertyToggleState = {
  isOpen: false,
};

export const savePropertyToggleSlice = createSlice({
  name: 'savePropertyToggle',
  initialState,
  reducers: {
    openSavePropertyToggle: (state) => {
      state.isOpen = true;
    },
    closeSavePropertyToggle: (state) => {
      state.isOpen = false;
    },
    toggleSavePropertyToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  openSavePropertyToggle,
  closeSavePropertyToggle,
  toggleSavePropertyToggle,
} = savePropertyToggleSlice.actions;

export const selectIsSavePropertyToggleOpen = (state: RootState) =>
  state.savePropertyToggle.isOpen;

export default savePropertyToggleSlice.reducer;