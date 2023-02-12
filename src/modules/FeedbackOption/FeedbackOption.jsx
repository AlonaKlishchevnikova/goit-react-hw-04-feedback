import PropTypes from 'prop-types';


export const FeedbackOption = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(key => (
        <button
            key={key}
            name={key}
            type="button"
            onClick={onLeaveFeedback}>
        {key}
      </button>
    ))}
  </div>
);

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
