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
import { selectVisibleTickets } from './redux/selectors/selectVisibleTickets';

const mapStateToProps = (state: RootState) => ({
  sortBy: state.filter.sortBy,
  checkbox: state.checkbox,
  tickets: selectVisibleTickets(state),
  loading: state.tickets.loading,
  error: state.tickets.error,
  hasMoreTickets:
    state.tickets.tickets.length > state.tickets.visibleTicketsCount,
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

  render() {
    const { sortBy, setFilterSortBy, loading, error, tickets, hasMoreTickets } =
      this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.main}>
          <Select />
          <div className={style.content}>
            <Tabs sortBy={sortBy} setFilterSortBy={setFilterSortBy} />
            <TicketsList tickets={tickets} />
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
