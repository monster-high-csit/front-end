/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

import './registrationModal.css';
import '../../style/autorization_modal.css';

import close from '../../resources/img/close.svg';

function RegistrationModal({ registrationActive, setRegistrationActive }) {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  const months = ['Январь', 'Ферваль', 'Март', 'Аперь', 'Май', 'Июнь', 'Июль', 'Июнь', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const years = [];
  for (let i = 0; i <= 100; i++) {
    years.push(2022 - i);
  }

  return (
    <div
      className={registrationActive === true ? 'modal registration active' : 'modal registration'}
      onClick={() => setRegistrationActive(false)}
    >
      <div
        className={registrationActive === true ? 'modal__content registration active' : 'modal__content registration'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="registration_wrapper">
          <h2 className="registration_title">Регистрация</h2>
          <div className="registration_inputs">
            <div className="FIO">
              <input
                className="modal_input__item"
                placeholder="Фамилия"
                type="text"
              />
              <input
                className="modal_input__item"
                placeholder="Имя"
                type="text"
              />
              <input
                className="modal_input__item"
                placeholder="Отчество"
                type="text"
              />
            </div>
            <input
              className="modal_input__item phone_number"
              placeholder="Номер телефона"
              type="text"
            />
            <input
              className="modal_input__item email"
              placeholder="E-mail"
              type="text"
            />
            <div className="modal_select_item">
              <select defaultValue="День" className="day">
                <option disabled>День</option>
                {
                    days.map((org) => <option key={org} value={org}>{org}</option>)
                }
              </select>
              <select defaultValue="Месяц" className="month">
                <option disabled>Месяц</option>
                {
                    months.map((org) => <option key={org} value={org}>{org}</option>)
                }
              </select>
              <select defaultValue="Год" className="year">
                <option disabled>Год</option>
                {
                    years.map((org) => <option key={org} value={org}>{org}</option>)
                }
              </select>
            </div>
            <input
              className="modal_input__item password"
              placeholder="Пароль"
              type="text"
            />
            <input
              className="modal_input__item password"
              placeholder="Повторите пароль"
              type="text"
            />
          </div>
          <div
            className="modal__button"
            onClick={() => setRegistrationActive(false)}
          >
            <p>Отправить</p>
          </div>
          <button className="modal__close">
            <img
              className="modal__close__icon"
              onClick={() => setRegistrationActive(false)}
              src={close}
              alt="close modal"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
