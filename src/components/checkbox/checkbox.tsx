import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type CheckboxProps = {
  label: string;
  id: string;
};
export class Checkbox extends Component<CheckboxProps> {
  render(): ReactNode {
    const { label, id } = this.props;
    return (
      <div className={style['checkbox-container']}>
        <input type="checkbox" name="all" id={id} />
        <label>{label}</label>
      </div>
    );
  }
}
