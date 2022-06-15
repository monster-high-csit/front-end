/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import './ScheduleItem.scss';

function ScheduleItem({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="schedule-item"
      key={item.id}
    >
      <h2 className="schedule-item__time">{item.time}</h2>
      <div className="schedule-item__position">
        <p className="schedule-item__hall">
          {item.hall}
          <span className="schedule-item__type">
            &nbsp;
            {item.type}
          </span>
        </p>
      </div>
      <p className="schedule-item__price">{item.price}</p>
    </div>
  );
}

export default ScheduleItem;
