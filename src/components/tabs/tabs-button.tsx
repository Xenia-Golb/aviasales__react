import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type TabsButtonProps = {
  children: ReactNode;
  onClick: () => void;
};
export class TabsButton extends Component<TabsButtonProps> {
  render(): ReactNode {
    const { children, onClick } = this.props;
    return (
      <button onClick={onClick} className={style['tabs__button']}>
        {children}
      </button>
    );
  }
}
