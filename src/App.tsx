import { Component, ReactNode } from 'react';
import style from './App.module.scss';
import logo from './assets/img/Logo.svg';
import { Select, Tabs } from './components';
import { TicketsList } from './components/tickets-list/tickets-list';

class App extends Component {
  render(): ReactNode {
    const tickets = [
      { price: '13 400 ₽' },
      { price: '13 600 ₽' },
      { price: '17 600 ₽' },
      { price: '20 000 ₽' },
    ];
    return (
      <div className={style['container']}>
        <div className={style['logo']}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style['main']}>
          <Select />
          <div className={style['content']}>
            <Tabs sortBy="price" />
            <TicketsList tickets={tickets} />
            <button className={style['content__button']}>
              Показать еще 5 билетов
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
