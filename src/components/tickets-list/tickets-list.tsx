import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from './ticket';
import { formatTime, formatDuration } from '../../utils/setformat';

interface TicketItem {
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

type TicketsListProps = {
  tickets: TicketItem[];
};

export class TicketsList extends Component<TicketsListProps> {
  render(): ReactNode {
    const { tickets } = this.props;

    return (
      <div className={style['tickets-list']}>
        {tickets.map((ticket) => {
          const formattedSegments = ticket.segments.map((segment) => ({
            origin: segment.origin,
            destination: segment.destination,
            departureTime: formatTime(segment.date),
            arrivalTime: formatTime(
              new Date(
                new Date(segment.date).getTime() + segment.duration * 60000
              ).toISOString()
            ),
            duration: formatDuration(segment.duration),
            stops: segment.stops.length.toString(),
            stopCities: segment.stops.join(', '),
          }));

          return (
            <Ticket
              key={`${ticket.price}-${ticket.carrier}`}
              price={ticket.price.toString()}
              carrier={ticket.carrier}
              segments={formattedSegments}
            />
          );
        })}
      </div>
    );
  }
}
