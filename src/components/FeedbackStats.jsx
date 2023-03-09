import  PropTypes  from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback} = useContext(FeedbackContext)
    //Calculate Average
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length
    
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {!isNaN(average) ? average.toFixed(1).replace(/[.,]0$/, '') : 0}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback : PropTypes.array.isRequired,
}

export default FeedbackStats