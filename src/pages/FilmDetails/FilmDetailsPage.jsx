/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import LoginModal from '../../components/loginModal/LoginModal';
import RegistrationModal from '../../components/registrationModal/RegistrationModal';
import Footer from '../../components/Footer/Footer';
import PaymentModal from '../../components/PaymentModal/PaymentModal';

import { films, defaultSchedule } from '../../constants';

import './FilmDetailsPage.scss';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';

function FilmDetailsPage() {
  const { id } = useParams();
  const currentFilm = films[id - 1];

  const [loginActive, setLoginActive] = useState(false);
  const [registrationActive, setRegistrationActive] = useState(false);
  const [paymentActive, setPaymentActive] = useState(false);
  const schedule = useState(defaultSchedule)[0];

  const [currentInformation, setCurrentInformation] = useState({
    name: 'aboba',
  });

  useEffect(() => {
  }, [currentInformation]);

  return (
    <div className="container">
      <LoginModal
        loginActive={loginActive}
        setLoginActive={setLoginActive}
      />
      <RegistrationModal
        registrationActive={registrationActive}
        setRegistrationActive={setRegistrationActive}
      />
      <PaymentModal
        information={currentInformation}
        modalActive={paymentActive}
        setModalActive={setPaymentActive}
      />
      <div className="film__main">
        <div className="film__header">
          <h2 className="film__logo">
            SoCinema
          </h2>
          <div className="film__go-home authorization_item">
            <Link to="/">Домой</Link>
          </div>
          <div className="film__authorization">
            <div
              className="film_login authorization_item"
              onClick={() => setLoginActive(true)}
            >
              <p>Вход</p>
            </div>
            <div
              className="film_registr authorization_item"
              onClick={() => setRegistrationActive(true)}
            >
              <p>Регистрация</p>
            </div>
          </div>
        </div>
        <div className="film__inner-content">
          <img src={currentFilm.src} alt="Film poster" className="film__poster" />
          <div className="film__film-details">
            <h2 className="film__film-title">{currentFilm.name}</h2>
            <div className="film__film-reqs">
              <p className="film__age-confirmation">{currentFilm.age}</p>
              <p className="film__time-length">{currentFilm.timeLength}</p>
              <p className="film__imdb-rating">
                IMDB&nbsp;
                {currentFilm.imdb}
              </p>
            </div>
            <p className="film__film-desc">{currentFilm.desc}</p>
            <p className="film__film-genres">
              Жанры:&nbsp;
              {currentFilm.genres}
            </p>
            <p className="film__film-directors">
              Режисёры:&nbsp;
              {currentFilm.directors}
            </p>
            <p className="film__film-main-roles">
              В главных ролях:&nbsp;
              {currentFilm.mainRoles}
            </p>
          </div>
        </div>
        <h2 className="film__schedule-title">Расписание</h2>
        <div className="film__filters">
          <div className="film__filters-3d">
            <p className="film__filters-3d-title">3D</p>
          </div>
          <p className="film__filters-date">Дата (по ум. сегодня)</p>
        </div>
        <div className="film__schedule">
          {schedule.map((scheduleItem) => (
            <ScheduleItem
              onClick={() => {
                setCurrentInformation({
                  ...currentFilm,
                  ...scheduleItem,
                });
                setPaymentActive(true);
              }}
              item={scheduleItem}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default FilmDetailsPage;
