import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import s7 from '../../../src/assets/img/S7_Logo.png';

type TicketProps = {
  price: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string; // Строка (преобразованный массив)
  stopCities: string; // Строка (преобразованный массив)
};

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
          <div className={style['ticket-header__price']}>{price} ₽</div>
          <div className={style['ticket-header__logo']}>
            <img src={s7} alt="avia-logo" />
          </div>
        </div>
        <div className={style['ticket-items']}>
          <div className={style['ticket__info']}>
            <div className={style['ticket-info__all']}>
              {from} – {to}{' '}
              <span>
                {departureTime} - {arrivalTime}
              </span>
            </div>
            <div className={style['ticket-info__all']}>
              В пути: <span>{duration}</span>
            </div>
            <div className={style['ticket-info__all']}>
              {stops === '0' ? 'Без пересадок' : `${stops} пересадка`}{' '}
              <span>{stopCities}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
