import React from "react";
import PropTypes from "prop-types";

import EventItem from "../EventItem";

import "./EventList.css";

const EventList = ({ events, authUserId, onViewDetail }) => {
  const eventsList = events.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={authUserId}
        creatorId={event.creator._id}
        onDetail={onViewDetail}
      />
    );
  });

  return <ul className="event_list">{eventsList}</ul>;
};

EventList.propTypes = {
  /**
   * List of ecents
   */
  events: PropTypes.array.isRequired,
  /**
   * Current userId
   */
  authUserId: PropTypes.string,
  /**
   * Method to view event details
   */
  onViewDetail: PropTypes.func.isRequired,
};

export default EventList;
