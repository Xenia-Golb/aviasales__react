import style from './App.module.scss';
import logo from './assets/img/Logo.svg';

function App() {
  return (
    <div className={style['container']}>
      <div className={style['logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style['content']}>
        <div className={style['select']}>
          <h3 className={style['title']}>Количество пересадок</h3>
          <div className={style['checkbox-container']}>
            <input type="checkbox" name="all" id="all" />
            <label htmlFor="all">Всe</label>
          </div>
          <div className={style['checkbox-container']}>
            <input type="checkbox" name="without" id="without" />
            <label htmlFor="without">Без пересадок</label>
          </div>
          <div className={style['checkbox-container']}>
            <input type="checkbox" name="oneTransfer" id="oneTransfer" />
            <label htmlFor="oneTransfer">1 пересадка</label>
          </div>
          <div className={style['checkbox-container']}>
            <input type="checkbox" name="twoTransfer" id="twoTransfer" />
            <label htmlFor="twoTransfer">2 пересадки</label>
          </div>
          <div className={style['checkbox-container']}>
            <input type="checkbox" name="threeTransfer" id="twoTransfer" />
            <label htmlFor="threeTransfer">3 пересадки</label>
          </div>
        </div>
        <div className={style['tabs']}>
          <button className={style['tabs__button']}>Самый быстрый</button>
          <button className={style['tabs__button']}>Самый дешевый</button>
          <button className={style['tabs__button']}>Оптимальный</button>
          <div className={style['tikets-list']}>
            <div className={style['tiket']}>tiket 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
