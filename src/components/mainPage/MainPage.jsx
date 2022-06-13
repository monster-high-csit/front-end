/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Parallax } from 'swiper';

import RegistrationModal from '../registrationModal/RegistrationModal';
import LoginModal from '../loginModal/LoginModal';

import './mainPage.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

import goFilms from '../../resources/img/go_films.svg';
import one from '../../resources/img/1.jpg';
import two from '../../resources/img/2.jpg';
import three from '../../resources/img/3.jpg';
import four from '../../resources/img/4.jpg';
import five from '../../resources/img/5.jpg';
import six from '../../resources/img/6.jpg';
import seven from '../../resources/img/7.jpg';
import eight from '../../resources/img/8.jpg';
import nine from '../../resources/img/9.jpg';

function MainPage() {
  const pageHeight = window.innerHeight;

  const [registrationActive, setRegistrationActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [slides, setSlides] = useState([
    {
      id: 1,
      src: one,
      age: '16+',
      name: 'Название фильма 1',
      selected: false,
    },
    {
      id: 2,
      src: two,
      age: '16+',
      name: 'Название фильма 2',
      selected: false,
    },
    {
      id: 3,
      src: three,
      age: '12+',
      name: 'Название фильма 3',
      selected: false,
    },
    {
      id: 4,
      src: four,
      age: '18+',
      name: 'Название фильма 4',
      selected: false,
    },
    {
      id: 5,
      src: five,
      age: '12+',
      name: 'Название фильма 5',
      selected: false,
    },
    {
      id: 6,
      src: six,
      age: '16+',
      name: 'Название фильма 6',
      selected: false,
    },
    {
      id: 7,
      src: seven,
      age: '18+',
      name: 'Название фильма 7',
      selected: false,
    },
    {
      id: 8,
      src: eight,
      age: '6+',
      name: 'Название фильма 8',
      selected: false,
    },
    {
      id: 9,
      src: nine,
      age: '12+',
      name: 'Название фильма 9',
      selected: false,
    },
  ]);

  useEffect(() => {
  }, [slides]);

  const ChangeSelected = (currentItem, itemSelected) => {
    let newArr = [];

    if (!itemSelected) {
      // eslint-disable-next-line arrow-body-style
      newArr = slides.map((item) => {
        return {
          id: item.id,
          src: item.src,
          age: item.age,
          name: item.name,
          selected: currentItem.id === item.id,
        };
      });
    } else {
      // eslint-disable-next-line arrow-body-style
      newArr = slides.map((item) => {
        return {
          id: item.id,
          src: item.src,
          age: item.age,
          name: item.name,
          selected: false,
        };
      });
    }

    setSlides(newArr);
  };

  return (
    <div className="container">
      <RegistrationModal
        registrationActive={registrationActive}
        setRegistrationActive={setRegistrationActive}
      />
      <LoginModal
        loginActive={loginActive}
        setLoginActive={setLoginActive}
      />
      <div className="main_page">
        <div className="main_page__header">
          <h2 className="main_page__logo">
            SoCinema
          </h2>
          <div className="main_page__autorization">
            <div
              className="main_page_login autorization_item"
              onClick={() => setLoginActive(true)}
            >
              <p>Вход</p>
            </div>
            <div
              className="main_page_registr autorization_item"
              onClick={() => setRegistrationActive(true)}
            >
              <p>Регистрация</p>
            </div>
          </div>
        </div>
        <div className="main_page__button">
          <img onClick={() => window.scrollTo({ top: pageHeight, behavior: 'smooth' })} className="go_films" src={goFilms} alt="" />
          <p>Перейти к каталогу фильмов</p>
        </div>
      </div>

      <div className="catalog">
        <div className="catalog__button">
          <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="go_films" src={goFilms} alt="" />
          <p>Вернуться на главную</p>
        </div>

        <Swiper
          className="Swiper"
          modules={[Mousewheel, FreeMode, Parallax]}
          spaceBetween={50}
          slidesPerView={3}
          mousewheel
          freeMode
        >
          <SwiperSlide className="Swiper_item">
            <div className="about_us">
              <h2 className="about_us__title">
                SoCinema
              </h2>
              <p>
                Спасибо что выбрали наш кинотеатр!
                У нас только высококачественный сервис,
                новейшие фильмы и просторнейшие залы :)
              </p>
              <p>
                Наш киноотеатр находится по адресу:
              </p>
              <p>
                Улица Монстерхай дом 8,
              </p>
              <p>
                Контактный телефон:
                8 - 888- 888 - 88 - 88
              </p>
            </div>
          </SwiperSlide>
          {slides.map((elem) => (
            <SwiperSlide
              key={elem.id}
              className={elem.selected === false ? 'Swiper_item' : 'Swiper_item active_slide'}
              onClick={() => { ChangeSelected(elem, elem.selected); }}
            >
              <div className="img_wrapper">
                <img src={elem.src} alt="" />
              </div>
              <div className={elem.selected === false ? 'Swiper_item_info' : 'Swiper_item_info Swiper_active_item_info'}>
                <h3>{elem.name}</h3>
                <p className="age_control">{elem.age}</p>
                <div className="check_film">
                  <p>Подробнее</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="Swiper_item" /> */}
        </Swiper>
      </div>
    </div>
  );
}

export default MainPage;
