/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import close from '../../resources/img/close-pink.svg';

import './FilmDetailsModal.scss';
import '../../style/autorization_modal.css';

function FilmDetailsModal({ filmDetails, modalActive, setModalActive }) {
  const closeHandler = (event) => {
    if (event.keyCode === 27) {
      setModalActive(false);
    }
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModalActive(false);
  };

  return (
    <div
      className={modalActive ? 'modal details active' : 'modal details'}
      onKeyUp={(e) => {
        e.stopPropagation();
        closeHandler(e);
      }}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive ? 'modal__content details active' : 'modal__content details'}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal__close-button"
          onClick={closeModal}
        >
          <img src={close} alt="Pink close button" className="modal__close-button-icon" />
        </div>
        <div className="modal__inner-content">
          <img src={filmDetails.src} alt="Film poster" className="modal__poster" />
          <div className="modal__film-details">
            <h2 className="modal__film-title">{filmDetails.name}</h2>
            <div className="modal__film-reqs">
              <p className="modal__age-confirmation">{filmDetails.age}</p>
              <p className="modal__time-length">{filmDetails.timeLength}</p>
              <p className="modal__imdb-rating">
                IMDB&nbsp;
                {filmDetails.imdb}
              </p>
            </div>
            <p className="modal__film-desc">{filmDetails.desc}</p>
            <p className="modal__film-genres">
              Жанры:&nbsp;
              {filmDetails.genres}
            </p>
            <p className="modal__film-directors">
              Режисёры:&nbsp;
              {filmDetails.directors}
            </p>
            <p className="modal__film-main-roles">
              В главных ролях:&nbsp;
              {filmDetails.mainRoles}
            </p>
          </div>
        </div>
        <div className="modal__session-choose-button">
          <Link to={`film/${filmDetails.id}`} className="modal_session-choose-button-title">Выбор сеанса</Link>
        </div>
      </div>
    </div>
  );
}

export default FilmDetailsModal;
