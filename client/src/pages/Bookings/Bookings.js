import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';
import BookingList from '../../components/Bookings/BookingList/BookingList';
import BookingChart from '../../components/Bookings/BookingChart/BookingChart';
import Spinner from '../../components/Spinner/Spinner';

class BookingsPage extends Component {
  state = {
    isLoading: false,
    outputType: 'list',
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
        query {
          bookings {
            _id
            createdAt
            event {
              _id
              title
              date
            }
          }
        }
      `
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.context.token
      }
    }).then(res => {
      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }

      return res.json();
    }).then(resData => {
      const bookings = resData.data.bookings;
      this.setState({ bookings: bookings, isLoading: false });
    }).catch(err => {
      console.log(err);
      this.setState({ isLoading: false });
    });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
        mutation CancelBooking($id: ID!) {
          cancelBooking(bookingId: $id) {
            _id
            title
          }
        }
      `,
      variables: {
        id: bookingId
      }
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.context.token
      }
    }).then(res => {
      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Failed!');
      }

      return res.json();
    }).then(resData => {
      this.setState(prevState => {
        const updatedBookings = prevState.bookings.filter(booking => {
          return booking._id !== bookingId;
        });
        return { bookings: updatedBookings, isLoading: false };
      });
    }).catch(err => {
      console.log(err);
      this.setState({ isLoading: false });
    });
  };

  changeOutputTypeHandler = outputType => {
    if(outputType === 'list') {
      this.setState({ outputType: 'list' });
    } else {
      this.setState({ outputType: 'chart' });
    }
  };

  render() {
    let content = <Spinner />
    if(!this.state.isLoading) {
      content = (
        <React.Fragment>
          <div>
            <button onClick={this.changeOutputTypeHandler.bind(this, 'list')}>List</button>
            <button onClick={this.changeOutputTypeHandler.bind(this, 'chart')}>Chart</button>
          </div>
          <div>
            {this.state.outputType === 'list' ? <BookingList bookings={this.state.bookings} /> : <BookingChart bookings={this.state.bookings} />}
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}

export default BookingsPage;