import { RootState } from '../store';
import { Ticket } from '../../components/tickets-list/ticket.type';

export const selectSortedTickets = (state: RootState, tickets: Ticket[]) => {
  const { sortBy } = state.filter;

  return [...tickets].sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    const durationA = a.segments[0].duration + a.segments[1].duration;
    const durationB = b.segments[0].duration + b.segments[1].duration;

    switch (sortBy) {
      case 'price':
        return priceA - priceB;
      case 'duration':
        return durationA - durationB;
      case 'optimality':
        return priceA - priceB || durationA - durationB;
      default:
        return 0;
    }
  });
};
