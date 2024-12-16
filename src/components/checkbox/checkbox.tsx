import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type CheckboxProps = {
  label: string;
  id: string;
  checked: boolean;
  onClick: () => void;
};

export class Checkbox extends Component<CheckboxProps> {
  render(): ReactNode {
    const { label, id, checked, onClick } = this.props;

    return (
      <div className={style['checkbox-container']}>
        <input
          type="checkbox"
          name="all"
          id={id}
          checked={checked}
          onChange={onClick}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}
