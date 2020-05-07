import React from "react";
import PropTypes from "prop-types";

import "./styled/EventItem.css";

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
  /**
   * EventId
   */
  eventId: PropTypes.string.isRequired,
  /**
   * Event title
   */
  title: PropTypes.string.isRequired,
  /**
   * Event price
   */
  price: PropTypes.number.isRequired,
  /**
   * Event date
   */
  date: PropTypes.string.isRequired,
  /**
   * Current userId
   */
  userId: PropTypes.string,
  /**
   * Event creatorId
   */
  creatorId: PropTypes.string.isRequired,
  /**
   * Method to view event details
   */
  onDetail: PropTypes.func.isRequired
};

export default EventItem;
