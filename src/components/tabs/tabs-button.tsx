import { Component, ReactNode } from 'react';
import style from '../../style/main.module.scss';

type TabsButtonProps = {
  children: ReactNode;
};
export class TabsButton extends Component<TabsButtonProps> {
  render(): ReactNode {
    const { children } = this.props;
    return <button className={style['tabs__button']}>{children}</button>;
  }
}
