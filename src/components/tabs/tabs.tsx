import { Component, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import style from '../../style/main.module.scss'; // Ваши стили
import { TabsButton } from './tabs-button'; // Компонент для кнопок
import { setSortBy } from '../../redux/slices/filterSlice'; // Экшен для сортировки

// Типизация состояния Redux
type RootState = {
  sort: {
    sortBy: 'price' | 'duration' | 'optimality';
  };
};

// mapStateToProps для получения состояния
const mapStateToProps = (state: RootState) => ({
  sortBy: state.sort.sortBy,
});

// mapDispatchToProps для передачи экшенов
const mapDispatchToProps = {
  setSortBy, // Это будет экшен, передаваемый компоненту
};

// Используем ConnectedProps для типизации пропсов компонента
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

// Классовый компонент
export class Tabs extends Component<PropsFromRedux> {
  // Метод для обработки изменения сортировки
  handleSortChange = (newSort: 'price' | 'duration' | 'optimality') => {
    if (this.props.setSortBy) {
      this.props.setSortBy(newSort); // Обновляем состояние через Redux
    } else {
      console.error('setSortBy is not a function'); // Если экшен не передан
    }
  };

  render(): ReactNode {
    return (
      <div className={style['tabs']}>
        <TabsButton onClick={() => this.handleSortChange('duration')}>
          Самый быстрый
        </TabsButton>
        <TabsButton onClick={() => this.handleSortChange('price')}>
          Самый дешевый
        </TabsButton>
        <TabsButton onClick={() => this.handleSortChange('optimality')}>
          Оптимальный
        </TabsButton>
      </div>
    );
  }
}

// Подключаем компонент к Redux Store через connect
export default connector(Tabs);
