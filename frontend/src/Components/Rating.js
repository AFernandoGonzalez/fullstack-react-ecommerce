import React from 'react'
import PropTypes from 'prop-types'

// destructure value and text from products.js
const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{color}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fa-solid fa-star-half-stroke' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fa-solid fa-star-half-stroke' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fa-solid fa-star-half-stroke' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fa-solid fa-star-half-stroke' : 'far fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fa-solid fa-star-half-stroke' : 'far fa-star'}></i>
            </span>
            {/* if theres aany text then show it  */}
            <span>{text && text}</span>
        </div>
    )
}

// color yellow for stars
Rating.defaultProps = {
    color: '#f8e825',
}

// set this as an object
// this PropTypes provides warnings of what type of value should be pass
Rating.propTypes = {
    // value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating