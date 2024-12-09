import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortState = {
  sortBy: 'price' | 'duration' | 'optimality';
};

const initialState: SortState = {
  sortBy: 'price',
};

const filterSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy(
      state,
      action: PayloadAction<'price' | 'duration' | 'optimality'>
    ) {
      state.sortBy = action.payload;
    },
  },
});
export const { setSortBy } = filterSlice.actions;

export default filterSlice.reducer;
