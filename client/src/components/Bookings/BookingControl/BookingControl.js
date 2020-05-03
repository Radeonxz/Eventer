import React from "react";
import PropTypes from "prop-types";
import "./styled/BookingControl.css";

const BookingControl = ({ activeOutputType, onChange }) => {
  return (
    <div className="booking-control">
      <button
        className={activeOutputType === "list" ? "active" : ""}
        onClick={onChange.bind(this, "list")}
      >
        List
      </button>
      <button
        className={activeOutputType === "chart" ? "active" : ""}
        onClick={onChange.bind(this, "chart")}
      >
        Chart
      </button>
    </div>
  );
};

BookingControl.defaultProps = { activeOutputType: "list" };

BookingControl.propTypes = {
  /**
   * Output type list or chart
   */
  activeOutputType: PropTypes.string,
  /**
   * BookingControl onChange func
   */
  onChange: PropTypes.func.isRequired
};

export default BookingControl;
