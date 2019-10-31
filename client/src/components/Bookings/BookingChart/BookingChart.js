import React from 'react';
import { BarChart } from 'react-chartjs-2';

const BOOKINGS_BUCKETS = {
  'Cheap': {
    min: 0,
    max: 100
  },
  'Normal': {
    min: 100,
    max: 200
  },
  'Expensive': {
    min: 200,
    max: 100000
  },
};

const bookingsChart = props => {
  const output = {};
  for(const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if(
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0)
    output[bucket] = filteredBookingsCount
  }
  return <BarChart />;
};

export default bookingsChart;