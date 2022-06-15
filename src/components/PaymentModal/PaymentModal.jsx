/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import close from '../../resources/img/close.svg';

import './PaymentModal.scss';

function PaymentModal({ information, modalActive, setModalActive }) {
  const rows = Array.from(Array(15), (_, idx) => idx + 1);
  const sits = Array.from(Array(31), (_, idx) => idx + 1);
  console.log(information);
  console.log(rows);
  console.log(sits);
  return (
    <div
      className={modalActive === true ? 'modal registration active' : 'modal registration'}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive === true ? 'payment-modal__content registration active' : 'payment-modal__content registration'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="payment__wrapper">
          <h2 className="payment__title">{information.name}</h2>
          <div className="payment__info">
            <p className="age-consent">{information.age}</p>
            <p className="film-type">{information.type}</p>
            <p className="hall-info">{information.hall}</p>
          </div>
          <div className="payment__inputs-wrapper">
            <div className="payment__inputs">
              <input
                className="payment-modal_input__item email"
                placeholder="E-mail"
                type="text"
              />
              <input
                className="payment-modal_input__item phone_number"
                placeholder="Номер телефона"
                type="text"
              />
              <input
                className="payment-modal_input__item password"
                placeholder="Пароль"
                type="text"
              />
              <input
                className="payment-modal_input__item password"
                placeholder="Повторите пароль"
                type="text"
              />
            </div>
            <div className="payment__selectors">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <select name="paymentSelector" className="payment__selector-row">
                  {rows.map((rowNum) => (
                    <option value={rowNum}>{`Ряд ${rowNum}`}</option>
                  ))}
                </select>
                <select name="paymentSelector" className="payment__selector-sit">
                  {sits.map((sitNum) => (
                    <option value={sitNum}>{`Место ${sitNum}`}</option>
                  ))}
                </select>
              </div>
              <input
                className="payment-modal_input__item password"
                placeholder="Номер карты"
                type="text"
              />
              <input
                className="payment-modal_input__item password"
                placeholder="Конец срока карты"
                type="text"
              />
              <input
                className="payment-modal_input__item password"
                placeholder="CVV"
                type="text"
              />
            </div>
            <img src={information.src} alt="film-poster" className="poster" />
          </div>
          <div
            className="payment-modal__button"
            onClick={() => setModalActive(false)}
          >
            <p>Отправить</p>
          </div>
          <button type="button" className="payment-modal__close">
            <img
              className="payment-modal__close__icon"
              onClick={() => setModalActive(false)}
              src={close}
              alt="close modal"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
