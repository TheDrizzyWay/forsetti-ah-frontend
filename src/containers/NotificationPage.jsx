import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-skeleton-loader';
import { Link } from 'react-router-dom';
import { getUserNotifications } from '../actions';
import NotificationCard from '../components/common/noficationCard';
/**
 * Notification Component
 */
export class Notification extends Component {
  async componentDidMount() {
    const { getNotifications } = this.props;
    await getNotifications();
  }

  render() {
    const {
      notifications: {
        notifications = [],
        isLoading = false
      }
    } = this.props;
    let data;
    if (isLoading) {
      data = (
        <div className='h-75 col-12 col-md-10'>
          <Skeleton
            count={4}
            width='100%'
            height='6rem'
            widthRandomness={0}
            borderRadius={0}
          />
        </div>
      );
    } else if (isLoading === false && notifications.length === 0) {
      data = (
        <h2>You have no notications</h2>
      );
    } else {
      data = (
        notifications && notifications.map(({ id, ...notices }) => (
          <NotificationCard
            key={id}
            {...notices}
          />
        ))
      );
    }
    return (
      <div className='container notification-page'>
        <div className='row py-4 mx-1 mx-md-0'>
          <h2 className='notification-header'>Notifications</h2>
        </div>
        <div className='row mx-1 mx-md-0'>
          {data}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  notifications: state.notifications,
});

const mapDispatchToProps = {
  getNotifications: getUserNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
