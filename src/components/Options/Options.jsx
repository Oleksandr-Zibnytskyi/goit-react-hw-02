import css from "./Options.module.css";

const Options = ({ updateFeedback, feedbackReset, totalFeedback}) => {
    
    return (
        <>
<button className={css.button} onClick={() => updateFeedback('good')}>Good</button>
<button className={css.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
<button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
{totalFeedback > 0 ? (<button className={css.button} onClick={feedbackReset}>Reset</button>) : null}
        </>
    );
};
export default Options

// {(feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0) && (<button onClick={resetFeedback}>Reset</button>)}