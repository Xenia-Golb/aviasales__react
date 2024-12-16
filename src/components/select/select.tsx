import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { toggleCheckbox } from '../../redux/slices/checkboxSlice';
import style from '../../style/main.module.scss';
import { Checkbox } from '../index';
import { RootState } from '../../redux/store';

type SelectProps = {
  checkboxes: RootState['checkbox'];
  toggleCheckbox: (checkbox: keyof RootState['checkbox']) => void;
};

class Select extends Component<SelectProps> {
  handleCheckboxChange = (checkbox: keyof RootState['checkbox']) => {
    this.props.toggleCheckbox(checkbox);
  };

  render(): ReactNode {
    const { checkboxes } = this.props;

    return (
      <div className={style['select']}>
        <h3 className={style['title']}>Количество пересадок</h3>
        <Checkbox
          label="Все"
          id="all"
          checked={checkboxes.all}
          onClick={() => this.handleCheckboxChange('all')}
        />
        <Checkbox
          label="Без пересадок"
          id="none"
          checked={checkboxes.none}
          onClick={() => this.handleCheckboxChange('none')}
        />
        <Checkbox
          label="1 пересадка"
          id="one"
          checked={checkboxes.one}
          onClick={() => this.handleCheckboxChange('one')}
        />
        <Checkbox
          label="2 пересадки"
          id="two"
          checked={checkboxes.two}
          onClick={() => this.handleCheckboxChange('two')}
        />
        <Checkbox
          label="3 пересадки"
          id="three"
          checked={checkboxes.three}
          onClick={() => this.handleCheckboxChange('three')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  checkboxes: state.checkbox,
});

const mapDispatchToProps = {
  toggleCheckbox,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
