import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortBy = 'price' | 'duration' | 'optimality';

type FilterState = {
  sortBy: SortBy;
};

const initialState: FilterState = {
  sortBy: 'price',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterSortBy(state, action: PayloadAction<SortBy>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setFilterSortBy } = filterSlice.actions;
export default filterSlice.reducer;
