import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

export class TicketInfo extends Component {
  render(): ReactNode {
    return (
      <div className={style['ticket__info']}>
        <div className={style['ticket-info__all']}>
          MOW – HKT <span>08:00 - 10:00</span>
        </div>
        <div className={style['ticket-info__all']}>
          В пути:
          <span> 21ч 15м</span>
        </div>
        <div className={style['ticket-info__all']}>
          1 пересадка
          <span>HKG, JNB</span>
        </div>
      </div>
    );
  }
}
