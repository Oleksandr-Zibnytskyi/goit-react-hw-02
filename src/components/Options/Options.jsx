import css from "./Options.module.css";

const Options = ({ updateFeedback, feedbackReset }) => {
    
    return (
        <>
<button className={css.button} onClick={() => updateFeedback('good')}>Good</button>
<button className={css.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
<button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
<button className={css.button} onClick={feedbackReset}>Reset</button>
        </>
    );
};
export default Options