import React, { useState } from "react";
import EventCard from "./EventCard";
import VenueModal from "./VenueModal";
import invitationData from "../data/invitationData";
import "../styles/InvitationCard.css";

function InvitationCard() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="card">

      <div className="corner corner-top-left"></div>
      <div className="corner corner-top-right"></div>

      <div className="bismillah">
        بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيْمِ
      </div>

      <div className="ornament">
        ◆ ◆ ◆
      </div>

      <div className="blessing">
        BLESSING FROM
      </div>

      <div className="parents">
        MRS & MR. MOHAMMED HUSSAIN
      </div>

      <div className="sub-parent">
        (Late Abdul Nabi Sahab)
      </div>

      <div className="invite-text">
        CORDIALLY INVITE YOU TO
      </div>

      <div className="main-event">
        VALIMA
      </div>

      <div className="event-subtitle">
        RECEPTION CEREMONY
      </div>

      <div className="divider"></div>

      <div className="beloved">
        OF THEIR BELOVED SON
      </div>

      <h1 className="groom-name">
        {invitationData.groomName}
      </h1>

      <div className="parent-text">
        Son of {invitationData.groomFather}
      </div>

      <div className="ornament">
        ✦ ○ ✦
      </div>

      <div className="union-text">
        UNITED WITH
      </div>

      <div className="daughter-label">
        DAUGHTER OF
      </div>

      <div className="bride-name">
        {invitationData.brideFather}
      </div>

      <div className="address">
        R/o. Anna Sagar, Mandal:
        Yellareddy
      </div>

      <EventCard
        title="NIKAH"
        date={invitationData.nikah.date}
        time={invitationData.nikah.time}
        onClick={() =>
          setSelectedEvent({
            ...invitationData.nikah,
            title: "Nikah",
          })
        }
      />

      <EventCard
        title="VALIMA RECEPTION"
        date={invitationData.valima.date}
        time={invitationData.valima.time}
        onClick={() =>
          setSelectedEvent({
            ...invitationData.valima,
            title: "Valima Reception",
          })
        }
      />

      <div className="footer-divider">
        ◆ ◆ ◆
      </div>

      <div className="blessing-message">
        Your blessed presence will
        illuminate this sacred union
        and fill our hearts with
        lasting joy.
      </div>

      <div className="warmth">
        — With warmth & duas —
      </div>

      <div className="compliments">
        WITH BEST COMPLIMENTS FROM
      </div>

      <div className="family">
        MOHD. SHADULLAH •
        MOHD. GULAM •
        MOHD. MOINUDDIN
      </div>

      <div className="corner corner-bottom-left"></div>
      <div className="corner corner-bottom-right"></div>

      <VenueModal
        data={selectedEvent}
        onClose={() =>
          setSelectedEvent(null)
        }
      />

    </div>
  );
}

export default InvitationCard;