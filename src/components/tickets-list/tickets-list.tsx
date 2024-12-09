import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Ticket } from '../index';

export class TicketsList extends Component {
  render(): ReactNode {
    return (
      <div className={style['tickets-list']}>
        <Ticket price={'13 400P'} />
      </div>
    );
  }
}
