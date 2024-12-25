import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from './App.module.scss';
import logo from './assets/img/Logo.svg';
import { Tabs } from './components';
import { TicketsList } from './components/tickets-list/tickets-list';
import { toggleCheckbox } from './redux/slices/checkboxSlice';
import { setFilterSortBy } from './redux/slices/filterSlice';
import { RootState } from './redux/store';
import Select from './components/select/select';
import { fetchTickets, showMoreTickets } from './redux/slices/ticketsSlice';

interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

const mapStateToProps = (state: RootState) => ({
  sortBy: state.filter.sortBy,
  checkbox: state.checkbox,
  tickets: state.tickets.visibleTickets,
  loading: state.tickets.loading,
  error: state.tickets.error,
  hasMoreTickets:
    state.tickets.tickets.length > state.tickets.visibleTickets.length,
});

const mapDispatchToProps = {
  toggleCheckbox,
  setFilterSortBy,
  fetchTickets,
  showMoreTickets,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends Component<PropsFromRedux> {
  componentDidMount() {
    this.props.fetchTickets();
  }

  // Функция для фильтрации билетов
  filterTickets = () => {
    const { checkbox, tickets } = this.props;

    if (!Array.isArray(tickets)) {
      console.error('Tickets is not an array:', tickets);
      return [];
    }

    if (!checkbox) {
      console.error('Checkbox is not defined:', checkbox);
      return tickets;
    }

    return tickets.filter((ticket: Ticket) => {
      const stopsThere = ticket.segments[0].stops.length;
      const stopsBack = ticket.segments[1].stops.length;

      if (checkbox.all) return true;

      const filtersThere = [
        checkbox.none && stopsThere === 0,
        checkbox.one && stopsThere === 1,
        checkbox.two && stopsThere === 2,
        checkbox.three && stopsThere === 3,
      ];

      const filtersBack = [
        checkbox.none && stopsBack === 0,
        checkbox.one && stopsBack === 1,
        checkbox.two && stopsBack === 2,
        checkbox.three && stopsBack === 3,
      ];

      return (
        filtersThere.some((filter) => filter) ||
        filtersBack.some((filter) => filter)
      );
    });
  };

  // Функция для сортировки билетов
  sortTickets = (
    tickets: Ticket[],
    sortBy: 'price' | 'duration' | 'optimality'
  ) => {
    return [...tickets].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      const durationA = a.segments[0].duration + a.segments[1].duration;
      const durationB = b.segments[0].duration + b.segments[1].duration;

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

  render() {
    const { sortBy, setFilterSortBy, loading, error, hasMoreTickets } =
      this.props;
    const filteredTickets = this.filterTickets();
    const sortedTickets = this.sortTickets(filteredTickets, sortBy);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

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
            {hasMoreTickets && (
              <button
                className={style['content__button']}
                onClick={() => this.props.showMoreTickets()}
              >
                Показать еще 5 билетов
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connector(App);
