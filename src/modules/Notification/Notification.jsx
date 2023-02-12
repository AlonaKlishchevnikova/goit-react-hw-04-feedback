import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};