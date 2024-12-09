import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';
import { TabsButton } from './tabs-button';

export class Tabs extends Component {
  render(): ReactNode {
    return (
      <div className={style['tabs']}>
        <TabsButton>Самый быстрый</TabsButton>
        <TabsButton>Самый дешевый</TabsButton>
        <TabsButton>Оптимальный</TabsButton>
      </div>
    );
  }
}
