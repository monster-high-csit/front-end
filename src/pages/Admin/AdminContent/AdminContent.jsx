import React from 'react';
import './AdminContent.scss';
import Button from '../../../components/Button/Button';

function AdminPageContent() {
  return (
    <div className="form-container">
      <form onSubmit={() => {}} className="form">
        {/* Введите название фильма */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-name" className="form__label">
            Введите название фильма
            <input type="text" id="film-name" className="form__input" />
          </label>
        </fieldset>

        {/* Выберите возрастное ограничение */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="age-consent" className="form__label">
            Выберите возрастное ограничение
            <input type="text" id="age-consent" className="form__input" />
          </label>
        </fieldset>

        {/* Выберите жанр */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="genre" className="form__label">
            Выберите жанр
            <input type="text" id="genre" className="form__input" />
          </label>
        </fieldset>

        {/* Введите хронометраж */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="chrono" className="form__label">
            Введите хронометраж
            <input type="text" id="chrono" className="form__input" />
          </label>
        </fieldset>

        {/* Введите оценку критиков */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="critics" className="form__label">
            Введите оценку критиков
            <input type="text" id="critics" className="form__input" />
          </label>
        </fieldset>

        {/* Введите имя режисёра */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="director" className="form__label">
            Введите имя режисёра
            <input type="text" id="director" className="form__input" />
          </label>
        </fieldset>

        {/* Введите название студии */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="studio" className="form__label">
            Введите название студии
            <input type="text" id="studio" className="form__input" />
          </label>
        </fieldset>

        {/* Введите имена актеров */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="actors" className="form__label">
            Введите имена актеров
            <input type="text" id="actors" className="form__input" />
          </label>
        </fieldset>

        {/* Введите краткое описание */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="short-desc" className="form__label">
            Введите краткое описание
            <input type="text" id="short-desc" className="form__input" />
          </label>
        </fieldset>

        {/* Введите полное описание */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="full-desc" className="form__label">
            Введите полное описание
            <input type="text" id="full-desc" className="form__input" />
          </label>
        </fieldset>

        {/* Добавьте постер фильма */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-poster" className="form__label">
            Добавьте постер фильма
            <input type="text" id="film-poster" className="form__input" />
          </label>
        </fieldset>

        {/* Добавьте трейлер фильма */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-trailer" className="form__label">
            Добавьте трейлер фильма
            <input type="text" id="film-trailer" className="form__input" />
          </label>
        </fieldset>

        {/* Дата начала показов фильма */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-start" className="form__label">
            Дата начала показов фильма
            <input type="text" id="film-start" className="form__input" />
          </label>
        </fieldset>

        {/* Дата конца показов фильма */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-end" className="form__label">
            Дата конца показов фильма
            <input type="text" id="film-end" className="form__input" />
          </label>
        </fieldset>

        {/* Выберите залы для показа */}
        <fieldset className="form__fieldset-container">
          <label htmlFor="film-halls" className="form__label">
            Выберите залы для показа
            <input type="text" id="film-halls" className="form__input" />
          </label>
        </fieldset>

        <Button title="Создать" action={() => {}} />
      </form>
    </div>
  );
}

export default AdminPageContent;
