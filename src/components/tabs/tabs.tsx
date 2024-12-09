import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import style from '../../style/main.module.scss'; // Ваши стили
import { TabsButton } from './tabs-button'; // Компонент для кнопок
import { setSortBy } from '../../redux/slices/filterSlice'; // Импортируем action

// Типизация пропсов для классового компонента
type TabsComponentProps = {
  setSortBy: (sortBy: 'price' | 'duration' | 'optimality') => void; // Функция для изменения сортировки
};

export class Tabs extends Component<TabsComponentProps> {
  // Метод для обработки изменения сортировки
  handleSortChange = (newSort: 'price' | 'duration' | 'optimality') => {
    this.props.setSortBy(newSort); // Обновляем состояние через Redux
  };

  render(): ReactNode {
    return (
      <div className={style['tabs']}>
        {/* Убираем заголовок */}
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

// Функция для связывания состояния из Redux Store с компонентом
const mapStateToProps = (state: {
  sort: { sortBy: 'price' | 'duration' | 'optimality' };
}) => ({
  sortBy: state.sort.sortBy, // Извлекаем значение сортировки
});

// Привязываем dispatch-методы (действия)
const mapDispatchToProps = {
  setSortBy, // Экспортируем setSortBy как метод
};

// Подключаем компонент к Redux Store через connect
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
