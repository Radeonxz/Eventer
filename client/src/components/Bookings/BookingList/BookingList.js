import React from "react";
import PropTypes from "prop-types";

import "./styled/BookingList.css";

const BookingList = ({ bookings, onDelete }) => (
  <ul className="bookings_list">
    {bookings.map((booking) => {
      return (
        <li key={booking._id} className="bookings_item">
          <div className="booking_item-data">
            {booking.event.title} -{" "}
            {new Date(booking.event.createdAt).toLocaleDateString()}
          </div>
          <div className="booking_item-actions">
            <button className="btn" onClick={onDelete.bind(this, booking._id)}>
              Cancel
            </button>
          </div>
        </li>
      );
    })}
  </ul>
);

BookingList.propTypes = {
  /**
   * List of bookings
   */
  bookings: PropTypes.array.isRequired,
  /**
   * BookingList delete booking func
   */
  onDelete: PropTypes.func.isRequired
};

export default BookingList;
