import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from '../index';

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
            price="13 400 ₽"
            from="MOW"
            to="HKT"
            departureTime="10:45"
            arrivalTime="08:00"
            duration="21ч 15м"
            stops="1"
            stopCities="HKG"
          />
        ))}
      </div>
    );
  }
}
