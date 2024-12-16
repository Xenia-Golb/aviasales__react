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
        <div className={style['ticket-items']}>
          <TicketInfo
            from="MOW"
            to="HKT"
            departureTime="08:00"
            arrivalTime="10:00"
            duration="21ч 15м"
            stops="1"
            stopCities="HKG, JNB"
          />
          <TicketInfo
            from="LED"
            to="PAR"
            departureTime="12:30"
            arrivalTime="16:45"
            duration="4ч 15м"
            stops="0"
            stopCities=""
          />
        </div>
      </div>
    );
  }
}
