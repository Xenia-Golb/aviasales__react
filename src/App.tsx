import style from './App.module.scss';
import logo from './assets/img/Logo.svg';
import { Select, Tabs } from './components';
import { TicketsList } from './components/tickets-list/tickets-list';

function App() {
  return (
    <div className={style['container']}>
      <div className={style['logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style['main']}>
        <Select />
        <div className={style['content']}>
          <Tabs />
          <TicketsList />
          <button className={style['content__button']}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
