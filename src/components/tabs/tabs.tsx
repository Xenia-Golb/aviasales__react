import { Component, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from '../../style/main.module.scss';
import { TabsButton } from './tabs-button';
import { setSortBy } from '../../redux/slices/filterSlice';

type RootState = {
  sort: {
    sortBy: 'price' | 'duration' | 'optimality';
  };
};

const mapStateToProps = (state: RootState) => ({
  sortBy: state.sort.sortBy,
});

const mapDispatchToProps = {
  setSortBy,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export class Tabs extends Component<PropsFromRedux> {
  handleSortChange = (newSort: 'price' | 'duration' | 'optimality') => {
    this.props.setSortBy(newSort);
  };

  render(): ReactNode {
    const { sortBy } = this.props;

    return (
      <div className={style['tabs']}>
        <TabsButton
          onClick={() => this.handleSortChange('duration')}
          isActive={sortBy === 'duration'}
        >
          Самый быстрый
        </TabsButton>
        <TabsButton
          onClick={() => this.handleSortChange('price')}
          isActive={sortBy === 'price'}
        >
          Самый дешевый
        </TabsButton>
        <TabsButton
          onClick={() => this.handleSortChange('optimality')}
          isActive={sortBy === 'optimality'}
        >
          Оптимальный
        </TabsButton>
      </div>
    );
  }
}

export default connector(Tabs);
