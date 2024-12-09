import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import s7 from '../../assets/img/S7_Logo.png';
import { TicketInfo } from '../index';

type TicketProps = {
  price: string;
};
export class Ticket extends Component<TicketProps> {
  render(): ReactNode {
    const { price } = this.props;
    return (
      <div className={style['ticket']}>
        <div className={style['ticket-header']}>
          <div className={style['ticket-header__price']}>{price}</div>
          <div className={style['ticket-header__logo']}>
            <img src={s7} alt="avia-logo" />
          </div>
        </div>
        <div className="ticket-items">
          <TicketInfo />
        </div>
      </div>
    );
  }
}
