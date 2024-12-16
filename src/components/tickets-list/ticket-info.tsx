import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type TicketInfoProps = {
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCities: string;
};

export class TicketInfo extends Component<TicketInfoProps> {
  render(): ReactNode {
    const {
      from,
      to,
      departureTime,
      arrivalTime,
      duration,
      stops,
      stopCities,
    } = this.props;

    return (
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
          {stops} пересадка <span>{stopCities}</span>
        </div>
      </div>
    );
  }
}
