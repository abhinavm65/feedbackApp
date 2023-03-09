import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }){
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple'></FaTimes>
            </button>
            <button className='edit'>
                <FaEdit onClick={() => editFeedback(item)} color='purple'></FaEdit>
            </button>
            <div className="text-display">
                {item.text}
            </div>           
        </Card>
    )
}
Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem