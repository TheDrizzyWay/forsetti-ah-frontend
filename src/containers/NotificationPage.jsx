// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Skeleton from 'react-skeleton-loader';
// import { getUserNotifications } from '../actions';
// import NotificationCard from '../components/common/NotificationCard';

// /**
//  * Notification Component
//  */
// export class Notification extends Component {
//   componentDidMount() {
//     const { getNotifications, token } = this.props;
//     getNotifications(token);
//   }

//   render() {
//     const {
//       notifications: {
//         notifications = [],
//         isLoading = false
//       }
//     } = this.props;
//     let data;
//     if (isLoading) {
//       data = (
//         <div className='h-75 col-12 col-md-10'>
//           <Skeleton
//             count={4}
//             width='100%'
//             height='6rem'
//             widthRandomness={0}
//             borderRadius={0}
//           />
//         </div>
//       );
//     } else if (!isLoading && notifications.length === 0) {
//       data = <h2>You have no notifications</h2>;
//     } else {
//       data = (
//         notifications && notifications.map(({ id, ...rest }) => (
//           <NotificationCard
//             key={id}
//             {...rest}
//           />
//         ))
//       );
//     }
//     return (
//       <div className='container notification-page'>
//         <div className='row py-4 mx-1 mx-md-0'>
//           <h2 className='notification-header'>Notifications</h2>
//         </div>
//         <div className='row mx-1 mx-md-0'>
//           {data}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   notifications: state.notifications,
//   token: state.auth.token
// });

// const mapDispatchToProps = {
//   getNotifications: getUserNotifications
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Notification);
