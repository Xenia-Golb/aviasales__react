import style from './App.module.scss';
import logo from './assets/img/Logo.svg';

function App() {
  return (
    <div className={style['container']}>
      <div className={style['logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style['select']}>select</div>
      <div className={style['tabs']}>tabs</div>
      <div className={style['tikets-list']}>
        <div className={style['tiket']}>tiket 1</div>
      </div>
    </div>
  );
}

export default App;
