import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type TabsButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export class TabsButton extends Component<TabsButtonProps> {
  render(): ReactNode {
    const { children, onClick, isActive } = this.props;

    return (
      <button
        onClick={onClick}
        className={`${style['tabs__button']} ${
          isActive ? style['tabs__button--active'] : ''
        }`}
      >
        {children}
      </button>
    );
  }
}
