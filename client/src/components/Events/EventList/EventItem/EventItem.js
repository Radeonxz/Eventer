import React from "react";
import PropTypes from "prop-types";

import "./EventItem.css";

const EventItem = ({
  eventId,
  title,
  price,
  date,
  userId,
  creatorId,
  onDetail
}) => (
  <li key={eventId} className="events_list-item">
    <div>
      <h1>{title}</h1>
      <h2>
        ${price} - {new Date(date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {userId === creatorId ? (
        <p>Your are the owner of this event.</p>
      ) : (
        <button className="btn" onClick={onDetail.bind(this, eventId)}>
          View Details
        </button>
      )}
    </div>
  </li>
);

EventItem.defaultProps = {
  userId: ""
};

EventItem.propTypes = {
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  userId: PropTypes.string,
  creatorId: PropTypes.string.isRequired,
  onDetail: PropTypes.func.isRequired
};

export default EventItem;
