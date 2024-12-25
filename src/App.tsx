import { Component, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from './App.module.scss';
import logo from './assets/img/Logo.svg';
import { Tabs } from './components';
import { TicketsList } from './components/tickets-list/tickets-list';
import { toggleCheckbox } from './redux/slices/checkboxSlice';
import { setFilterSortBy } from './redux/slices/filterSlice';
import { RootState } from './redux/store';
import Select from './components/select/select';

// Тип для билета
type Ticket = {
  price: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  stopCities: string;
};

// Пример данных для tickets
const tickets: Ticket[] = [
  {
    price: '13400',
    from: 'MOW',
    to: 'HKT',
    departureTime: '10:45',
    arrivalTime: '08:00',
    duration: '21ч 15м',
    stops: '1',
    stopCities: 'Гонконг',
  },
  {
    price: '12800',
    from: 'MOW',
    to: 'HKT',
    departureTime: '11:30',
    arrivalTime: '08:45',
    duration: '20ч 55м',
    stops: '0',
    stopCities: '',
  },
  {
    price: '14000',
    from: 'MOW',
    to: 'HKT',
    departureTime: '12:00',
    arrivalTime: '09:15',
    duration: '21ч 15м',
    stops: '2',
    stopCities: 'Гонконг, Саньжоу',
  },
  {
    price: '10000',
    from: 'MOW',
    to: 'HKT',
    departureTime: '12:30',
    arrivalTime: '10:00',
    duration: '21ч 30м',
    stops: '3',
    stopCities: 'Гонконг, Саньжоу, Тайбэй',
  },
];

const mapStateToProps = (state: RootState) => ({
  sortBy: state.filter.sortBy,
  checkbox: state.checkbox,
});

const mapDispatchToProps = {
  toggleCheckbox,
  setFilterSortBy,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends Component<PropsFromRedux> {
  // Функция для фильтрации билетов
  filterTickets = () => {
    const { checkbox } = this.props;

    return tickets.filter((ticket) => {
      const stops = Number(ticket.stops);

      // Если выбрано "Все", показываем все билеты
      if (checkbox.all) return true;

      // Проверяем каждый чекбокс
      const filters = [
        checkbox.none && stops === 0, // Без пересадок
        checkbox.one && stops === 1, // 1 пересадка
        checkbox.two && stops === 2, // 2 пересадки
        checkbox.three && stops === 3, // 3 пересадки
      ];

      // Если хотя бы один фильтр совпал, показываем билет
      return filters.some((filter) => filter);
    });
  };

  // Функция для преобразования длительности в минуты
  getDurationInMinutes = (duration: string) => {
    const [hours, minutes] = duration
      .split('ч')
      .map((part) => parseInt(part.replace(/\D/g, ''), 10));
    return hours * 60 + (minutes || 0);
  };

  // Функция для сортировки билетов
  sortTickets = (
    tickets: Ticket[],
    sortBy: 'price' | 'duration' | 'optimality'
  ) => {
    return [...tickets].sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      const durationA = this.getDurationInMinutes(a.duration);
      const durationB = this.getDurationInMinutes(b.duration);

      switch (sortBy) {
        case 'price':
          return priceA - priceB;
        case 'duration':
          return durationA - durationB;
        case 'optimality':
          return priceA - priceB && durationA - durationB;
        default:
          return 0;
      }
    });
  };

  render(): ReactNode {
    const { sortBy, setFilterSortBy } = this.props;
    const filteredTickets = this.filterTickets();
    const sortedTickets = this.sortTickets(filteredTickets, sortBy);

    return (
      <div className={style['container']}>
        <div className={style['logo']}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style['main']}>
          <Select />
          <div className={style['content']}>
            <Tabs sortBy={sortBy} setFilterSortBy={setFilterSortBy} />
            <TicketsList tickets={sortedTickets} />
            <button className={style['content__button']}>
              Показать еще 5 билетов
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connector(App);
