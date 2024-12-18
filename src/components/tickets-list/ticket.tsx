import React, { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import s7 from '../../assets/img/S7_Logo.png';
import { TicketInfo } from '../index';
import { TicketInfoProps } from './ticket-info';

type TicketProps = {
  price: string;
} & TicketInfoProps;

export class Ticket extends Component<TicketProps> {
  render(): ReactNode {
    const {
      price,
      from,
      to,
      departureTime,
      arrivalTime,
      duration,
      stops,
      stopCities,
    } = this.props;

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
            from={from}
            to={to}
            departureTime={departureTime}
            arrivalTime={arrivalTime}
            duration={duration}
            stops={stops}
            stopCities={stopCities}
          />
        </div>
      </div>
    );
  }
}
