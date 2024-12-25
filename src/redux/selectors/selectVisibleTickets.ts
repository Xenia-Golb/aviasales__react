import { RootState } from '../store';
import { selectFilteredTickets } from './selectFiltered';
import { selectSortedTickets } from './selectSorted';

export const selectVisibleTickets = (state: RootState) => {
  const filteredTickets = selectFilteredTickets(state);
  const sortedTickets = selectSortedTickets(state, filteredTickets);
  const { visibleTicketsCount } = state.tickets;
  return sortedTickets.slice(0, visibleTicketsCount);
};
