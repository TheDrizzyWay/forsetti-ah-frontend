import moment from 'moment';

const formatDate = date => moment(date).format('MMMM D, YYYY');
export default formatDate;
