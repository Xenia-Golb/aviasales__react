import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from './ticket';

type TicketItem = {
  price: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCities: string;
};

type TicketsListProps = {
  tickets: TicketItem[];
};

export class TicketsList extends Component<TicketsListProps> {
  render(): ReactNode {
    const { tickets } = this.props;

    return (
      <div className={style['tickets-list']}>
        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            price={ticket.price}
            from={ticket.from}
            to={ticket.to}
            departureTime={ticket.departureTime}
            arrivalTime={ticket.arrivalTime}
            duration={ticket.duration}
            stops={ticket.stops}
            stopCities={ticket.stopCities}
          />
        ))}
      </div>
    );
  }
}
