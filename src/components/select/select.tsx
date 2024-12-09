import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { Checkbox } from '../index';

export class Select extends Component {
  render(): ReactNode {
    return (
      <div className={style['select']}>
        <h3 className={style['title']}>Количество пересадок</h3>
        <Checkbox id="all" label="Все" />
        <Checkbox id="without" label="Без пересадок" />
        <Checkbox id="oneTransfer" label="1 пересадка" />
        <Checkbox id="twoTransfer" label="2 пересадки" />
        <Checkbox id="threeTransfer" label="3 пересадки" />
      </div>
    );
  }
}
