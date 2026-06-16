import React from "react";
import "../styles/EventCard.css";

function EventCard({
  title,
  date,
  time,
  location,
  onClick,
}) {
  return (
    <div
      className="event-card"
      onClick={onClick}
    >
      <div className="event-title">
        {title}
      </div>

      <div className="event-date">
        {date}
      </div>

      <div className="event-time">
        {time}
      </div>

      <a
        href={location}
        target="_blank"
        rel="noreferrer"
        className="event-location"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        📍 OPEN LOCATION IN GOOGLE MAPS
      </a>
    </div>
  );
}

export default EventCard;