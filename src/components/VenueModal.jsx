import React from "react";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaRegCalendarAlt,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

import "../styles/Modal.css";

function VenueModal({ data, onClose }) {
  if (!data) return null;

  const isNikah =
    data.title?.toLowerCase().includes("nikah");

  return (
    <div className="overlay">
      <div className="premium-modal">

        <button
          className="close-icon"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div
          className={
            isNikah
              ? "modal-header nikah-header"
              : "modal-header valima-header"
          }
        >
          <div className="modal-icon">
            {isNikah ? "🕌" : "🌙"}
          </div>

          <h2>{data.venue}</h2>

          <p>
            {isNikah
              ? "YELLAREDDY • DIST. KAMAREDDY"
              : "BANSWADA • DIST. KAMAREDDY"}
          </p>
        </div>

        <div className="modal-body">

          <div className="event-type">
            {isNikah
              ? "NIKAH CEREMONY"
              : "VALIMA RECEPTION"}
          </div>

          <h3>{data.venue}</h3>

          <div className="info-row">
            <FaRegCalendarAlt />
            <span>{data.date}</span>
          </div>

          <div className="info-row">
            <FaRegClock />
            <span>{data.time}</span>
          </div>

          <div className="info-row">
            <FaMapMarkerAlt />
            <span>{data.venue}</span>
          </div>

          <a
            href={data.location}
            target="_blank"
            rel="noreferrer"
            className="maps-button"
          >
            <FaPaperPlane />
            OPEN IN GOOGLE MAPS
          </a>

          <button
            className="close-button"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}

export default VenueModal;