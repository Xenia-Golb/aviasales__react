import { Component, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleCheckbox } from '../../redux/slices/checkboxSlice';
import { RootState } from '../../redux/store';
import style from '../../style/main.module.scss';

type SelectProps = ConnectedProps<typeof connector>;

class Select extends Component<SelectProps> {
  handleCheckboxChange = (checkboxName: keyof typeof this.props.checkbox) => {
    this.props.toggleCheckbox(checkboxName);
  };

  render(): ReactNode {
    const { checkbox } = this.props;

    return (
      <div className={style['select']}>
        <h3 className={style['title']}>Количество пересадок</h3>
        <div className={style['checkbox-container']}>
          <input
            type="checkbox"
            id="all"
            checked={checkbox.all}
            onChange={() => this.handleCheckboxChange('all')}
          />
          <label htmlFor="all">Все</label>
        </div>
        <div className={style['checkbox-container']}>
          <input
            type="checkbox"
            id="none"
            checked={checkbox.none}
            onChange={() => this.handleCheckboxChange('none')}
          />
          <label htmlFor="none">Без пересадок</label>
        </div>
        <div className={style['checkbox-container']}>
          <input
            type="checkbox"
            id="one"
            checked={checkbox.one}
            onChange={() => this.handleCheckboxChange('one')}
          />
          <label htmlFor="one">1 пересадка</label>
        </div>
        <div className={style['checkbox-container']}>
          <input
            type="checkbox"
            id="two"
            checked={checkbox.two}
            onChange={() => this.handleCheckboxChange('two')}
          />
          <label htmlFor="two">2 пересадки</label>
        </div>
        <div className={style['checkbox-container']}>
          <input
            type="checkbox"
            id="three"
            checked={checkbox.three}
            onChange={() => this.handleCheckboxChange('three')}
          />
          <label htmlFor="three">3 пересадки</label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  checkbox: state.checkbox,
});

const mapDispatchToProps = {
  toggleCheckbox,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Select);
