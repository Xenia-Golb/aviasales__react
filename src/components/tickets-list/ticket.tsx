import React from 'react';
import style from '../../style/main.module.scss';

interface Segment {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCities: string;
}

type TicketProps = {
  price: string;
  carrier: string;
  segments: Segment[];
};

export const Ticket: React.FC<TicketProps> = ({ price, carrier, segments }) => {
  return (
    <div className={style.ticket}>
      <div className={style['ticket-header']}>
        <div className={style['ticket-header__price']}>{price} ₽</div>
        <div className={style['ticket-header__logo']}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      {segments.map((segment, index) => (
        <div key={index} className={style['ticket-items']}>
          <div className={style['ticket__info']}>
            <div className={style['ticket-info__all']}>
              {segment.origin} – {segment.destination}{' '}
              <span>
                {segment.departureTime} - {segment.arrivalTime}
              </span>
            </div>
            <div className={style['ticket-info__all']}>
              В пути: <span>{segment.duration}</span>
            </div>
            <div className={style['ticket-info__all']}>
              {segment.stops === '0'
                ? 'Без пересадок'
                : `${segment.stops} пересадка`}{' '}
              <span>{segment.stopCities}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
