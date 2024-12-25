import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Ticket } from '../../components/tickets-list/ticket.type';
type ApiResponse = {
  tickets: Ticket[];
  stop: boolean;
};

const API_URL = import.meta.env.VITE_API_URL;

const getSearchId = async () => {
  const response = await axios.get(`${API_URL}/search`);
  return response.data.searchId;
};

export const fetchTickets = createAsyncThunk<
  Ticket[],
  void,
  { rejectValue: string }
>('tickets/fetchTickets', async (_, { rejectWithValue }) => {
  try {
    const searchId = await getSearchId();
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

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [] as Ticket[],
    visibleTicketsCount: 5,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    showMoreTickets: (state) => {
      state.visibleTicketsCount += 5;
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
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch tickets';
      });
  },
});

export const { showMoreTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
