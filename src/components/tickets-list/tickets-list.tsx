import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from './ticket';

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
  formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  render(): ReactNode {
    const { tickets } = this.props;

    return (
      <div className={style['tickets-list']}>
        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            price={ticket.price.toString()}
            carrier={ticket.carrier}
            segments={[
              {
                origin: ticket.segments[0].origin,
                destination: ticket.segments[0].destination,
                departureTime: this.formatTime(ticket.segments[0].date),
                arrivalTime: this.formatTime(
                  new Date(
                    new Date(ticket.segments[0].date).getTime() +
                      ticket.segments[0].duration * 60000
                  ).toISOString()
                ),
                duration: this.formatDuration(ticket.segments[0].duration),
                stops: ticket.segments[0].stops.length.toString(),
                stopCities: ticket.segments[0].stops.join(', '),
              },
              {
                origin: ticket.segments[1].origin,
                destination: ticket.segments[1].destination,
                departureTime: this.formatTime(ticket.segments[1].date),
                arrivalTime: this.formatTime(
                  new Date(
                    new Date(ticket.segments[1].date).getTime() +
                      ticket.segments[1].duration * 60000
                  ).toISOString()
                ),
                duration: this.formatDuration(ticket.segments[1].duration),
                stops: ticket.segments[1].stops.length.toString(),
                stopCities: ticket.segments[1].stops.join(', '),
              },
            ]}
          />
        ))}
      </div>
    );
  }
}
