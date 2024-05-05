import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from 'react';



function App () {

const [feedback, setFeedback] = useState ({ good: 0, neutral: 0, bad: 0 });

useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

const feedbackReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
};

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

 return(
<div>

<Description/>

<Options 
updateFeedback={updateFeedback}
feedbackReset={feedbackReset}
 />

{totalFeedback > 0 ? (
  <Feedback
    good={feedback.good}
    neutral={feedback.neutral}
    bad={feedback.bad}
    totalFeedback={totalFeedback}
    positiveFeedback={positiveFeedback}
  />
) : (
  <Notification message={"No feedback yet"} />
)}

</div>
 );
}

export default App;