import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from '../index';

type TicketItem = {
  price: string;
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
          <Ticket key={index} price={ticket.price} />
        ))}
      </div>
    );
  }
}
