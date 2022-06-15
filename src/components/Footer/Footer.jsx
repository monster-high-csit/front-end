import React from 'react';

import youtube from '../../resources/img/youtube.svg';
import vk from '../../resources/img/vk.svg';
import twitter from '../../resources/img/twitter.svg';

import './Footer.scss';

function Footer() {
  return (
    <>
      <hr color="#D5BBDA" />
      <div className="footer">
        <div className="footer__logo">
          <h2 className="footer__logo-title">SoCinema</h2>
        </div>
        <div className="footer__contacts">
          <p className="footer__address">Адрес: г. Саратов, улица Пушкина, дом 17/03</p>
          <p className="footer__phone">Контактный телефон: +8 (800) 555-35-35</p>
          <div className="footer__socials">
            <p className="footer__socials-title">Наши соцсети:</p>
            <img src={youtube} alt="Youtube icon" className="footer__socials-icon" />
            <img src={vk} alt="VK icon" className="footer__socials-icon" />
            <img src={twitter} alt="Twitter icon" className="footer__socials-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
