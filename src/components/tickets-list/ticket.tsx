import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import s7 from '../../../src/assets/img/S7_Logo.png';

type Segment = {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCities: string;
};

type TicketProps = {
  price: string;
  carrier: string;
  segments: [Segment, Segment];
};

export class Ticket extends Component<TicketProps> {
  render(): ReactNode {
    const { price, carrier, segments } = this.props;

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
              {segments[0].origin} – {segments[0].destination}{' '}
              <span>
                {segments[0].departureTime} - {segments[0].arrivalTime}
              </span>
            </div>
            <div className={style['ticket-info__all']}>
              В пути: <span>{segments[0].duration}</span>
            </div>
            <div className={style['ticket-info__all']}>
              {segments[0].stops === '0'
                ? 'Без пересадок'
                : `${segments[0].stops} пересадка`}{' '}
              <span>{segments[0].stopCities}</span>
            </div>
          </div>
        </div>

        <div className={style['ticket-items']}>
          <div className={style['ticket__info']}>
            <div className={style['ticket-info__all']}>
              {segments[1].origin} – {segments[1].destination}{' '}
              <span>
                {segments[1].departureTime} - {segments[1].arrivalTime}
              </span>
            </div>
            <div className={style['ticket-info__all']}>
              В пути: <span>{segments[1].duration}</span>
            </div>
            <div className={style['ticket-info__all']}>
              {segments[1].stops === '0'
                ? 'Без пересадок'
                : `${segments[1].stops} пересадка`}{' '}
              <span>{segments[1].stopCities}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
