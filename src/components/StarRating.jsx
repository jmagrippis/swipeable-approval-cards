import React, { PropTypes } from 'react'

const StarRating = ({ rating, max, look, className }) => (
  <div className={className}>
    {[...Array(max)].map((_, i) => {
      let starType
      if (rating >= i + 1) {
        starType = 'star'
      } else if (rating - i > 0.25) {
        starType = 'star_half'
      } else {
        starType = 'star_border'
      }
      return <i key={i} className={'material-icons ' + look}>{starType}</i>
    })}
  </div>
)

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
  look: PropTypes.string
}

export default StarRating
