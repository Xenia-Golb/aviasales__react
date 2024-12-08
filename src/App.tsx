import style from './App.module.scss';
import logo from './assets/img/Logo.svg';
import s7 from './assets/img/S7_Logo.png';

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
          <div className={style['tickets-list']}>
            <div className={style['ticket']}>
              <div className={style['ticket-header']}>
                <div className={style['ticket-header__price']}>13 400 Р </div>
                <div className={style['ticket-header__logo']}>
                  <img src={s7} />
                </div>
              </div>
              <div className="ticket-items">
                <div className={style['ticket__info']}>
                  <div className={style['ticket-info__all']}>
                    MOW – HKT <span>08:00 - 10:00</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    В пути:
                    <span> 21ч 15м</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    1 пересадка
                    <span>HKG, JNB</span>
                  </div>
                </div>
                <div className={style['ticket__info']}>
                  <div className={style['ticket-info__all']}>
                    MOW – HKT <span>08:00 - 10:00</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    В пути:
                    <span> 21ч 15м</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    1 пересадка
                    <span>HKG, JNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style['tickets-list']}>
            <div className={style['ticket']}>
              <div className={style['ticket-header']}>
                <div className={style['ticket-header__price']}>13 400 Р </div>
                <div className={style['ticket-header__logo']}>
                  <img src={s7} />
                </div>
              </div>
              <div className="ticket-items">
                <div className={style['ticket__info']}>
                  <div className={style['ticket-info__all']}>
                    MOW – HKT <span>08:00 - 10:00</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    В пути:
                    <span> 21ч 15м</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    1 пересадка
                    <span>HKG, JNB</span>
                  </div>
                </div>
                <div className={style['ticket__info']}>
                  <div className={style['ticket-info__all']}>
                    MOW – HKT <span>08:00 - 10:00</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    В пути:
                    <span> 21ч 15м</span>
                  </div>
                  <div className={style['ticket-info__all']}>
                    1 пересадка
                    <span>HKG, JNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={style['content__button']}>
            Показать еще 5 билетов
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
