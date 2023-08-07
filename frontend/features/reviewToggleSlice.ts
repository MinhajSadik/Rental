import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

interface ReviewToggleState {
  isOpen: boolean;
}

const initialState: ReviewToggleState = {
  isOpen: false,
};

export const reviewToggleSlice = createSlice({
  name: 'reviewToggle',
  initialState,
  reducers: {
    openReviewToggle: (state) => {
      state.isOpen = true;
    },
    closeReviewToggle: (state) => {
      state.isOpen = false;
    },
    toggleReviewToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openReviewToggle, closeReviewToggle, toggleReviewToggle } = reviewToggleSlice.actions;
export const selectIsReviewToggleOpen = (state: RootState) => state.reviewToggle.isOpen;
export default reviewToggleSlice.reducer;