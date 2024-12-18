// filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  sortBy: 'price' | 'duration' | 'optimality';
};

const initialState: FilterState = {
  sortBy: 'price', // Начальное значение сортировки
};

const filterSlice = createSlice({
  name: 'filter',
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
