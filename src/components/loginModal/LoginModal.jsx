/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

import './loginModal.css';
import '../../style/autorization_modal.css';

import close from '../../resources/img/close.svg';

function LoginModal({ loginActive, setLoginActive }) {
  return (
    <div
      className={loginActive === true ? 'modal login active' : 'modal login'}
      onClick={() => setLoginActive(false)}
    >
      <div
        className={loginActive === true ? 'modal__content login active' : 'modal__content login'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="login_wrapper">
          <h2 className="login_title">Вход</h2>
          <div className="login_inputs">
            <input
              className="modal_input__item login__input"
              placeholder="E-mail"
              type="text"
            />
            <input
              className="modal_input__item login__input"
              placeholder="Пароль"
              type="text"
            />
          </div>
          <div
            className="modal__button button__login"
            onClick={() => setLoginActive(false)}
          >
            <p>Отправить</p>
          </div>
          <button className="modal__close">
            <img
              className="modal__close__icon"
              onClick={() => setLoginActive(false)}
              src={close}
              alt="close modal"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
