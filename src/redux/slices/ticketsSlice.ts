import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Тип для билета
interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

type ApiResponse = {
  tickets: Ticket[];
  stop: boolean;
};

// Базовый URL API
const API_URL = 'https://aviasales-test-api.kata.academy';

// Получение searchId
const getSearchId = async () => {
  const response = await axios.get(`${API_URL}/search`);
  return response.data.searchId;
};

// Асинхронное действие для получения билетов
export const fetchTickets = createAsyncThunk<
  Ticket[],
  void,
  { rejectValue: string }
>('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    // Получаем searchId
    const searchId = await getSearchId();

    // Получаем билеты
    const response = await axios.get<ApiResponse>(`${API_URL}/tickets`, {
      params: { searchId },
    });

    return response.data.tickets;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An unknown error occurred');
  }
});

// Создание среза для управления состоянием билетов
const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [] as Ticket[], // Все билеты
    visibleTickets: [] as Ticket[], // Видимые билеты
    loading: false,
    error: null as string | null,
    currentPage: 1, // Текущая страница
    ticketsPerPage: 5, // Количество билетов на странице
  },
  reducers: {
    // Увеличиваем текущую страницу и обновляем видимые билеты
    showMoreTickets: (state) => {
      state.currentPage += 1;
      const endIndex = state.currentPage * state.ticketsPerPage;
      state.visibleTickets = state.tickets.slice(0, endIndex);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
        const endIndex = state.currentPage * state.ticketsPerPage;
        state.visibleTickets = action.payload.slice(0, endIndex);
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch tickets';
      });
  },
});

// Экспортируем экшен для показа больше билетов
export const { showMoreTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
