import PropTypes from 'prop-types';


export const FeedbackOption = ({ options, leaveFeedback }) => {
   const elements = options.map(name => <p key={name} >
     <button onClick={() => leaveFeedback(name)} type="button">{name}</button>
                                       </p>)
    return (
        <>
           {elements}
        </>
    )
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};
