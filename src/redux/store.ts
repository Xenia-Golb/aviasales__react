import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterReducer from './slices/filterSlice';
import checkboxReducer from './slices/checkboxSlice';
import ticketsReducer from './slices/ticketsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    checkbox: checkboxReducer,
    tickets: ticketsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
