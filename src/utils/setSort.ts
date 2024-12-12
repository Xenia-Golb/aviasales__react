export const sortFlights = (
  flights: any[],
  sortBy: 'price' | 'duration' | 'optimality'
) => {
  switch (sortBy) {
    case 'price':
      return flights.sort((a, b) => a.price - b.price);
    case 'duration':
      return flights.sort((a, b) => a.duration - b.duration);
    case 'optimality':
      return flights.sort((a, b) => {
        const scoreA = a.price * 0.6 + a.duration * 0.4;
        const scoreB = b.price * 0.6 + b.duration * 0.4;
        return scoreA - scoreB;
      });
    default:
      return flights;
  }
};
