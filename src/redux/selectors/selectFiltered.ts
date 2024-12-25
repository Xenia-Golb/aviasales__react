import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Ticket } from '../../components/tickets-list/ticket.type';

export const selectFilteredTickets = createSelector(
  (state: RootState) => state.tickets.tickets,
  (state: RootState) => state.checkbox,

  (tickets, checkbox) => {
    if (!Array.isArray(tickets)) return [];
    if (checkbox.all) {
      return tickets;
    }

    return tickets.filter((ticket: Ticket) => {
      const stopsThere = ticket.segments[0]?.stops.length || 0;
      const stopsBack = ticket.segments[1]?.stops.length || 0;
      const filtersThere = [
        checkbox.none && stopsThere === 0,
        checkbox.one && stopsThere === 1,
        checkbox.two && stopsThere === 2,
        checkbox.three && stopsThere === 3,
      ];

      const filtersBack = [
        checkbox.none && stopsBack === 0,
        checkbox.one && stopsBack === 1,
        checkbox.two && stopsBack === 2,
        checkbox.three && stopsBack === 3,
      ];
      const matchesThere = filtersThere.some((filter) => filter);
      const matchesBack = filtersBack.some((filter) => filter);
      return matchesThere || matchesBack;
    });
  }
);
