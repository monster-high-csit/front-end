import React from 'react';
import './Button.scss';

function Button({ title, action }) {
  return (
    <button className="general-button" type="submit" onClick={action}>{title}</button>
  );
}

export default Button;
