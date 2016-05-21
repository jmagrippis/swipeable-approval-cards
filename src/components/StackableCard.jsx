import React, { PropTypes } from 'react'

const StackableCard = ({ avatar, name, rating }) => (
  <div>
    <div>{avatar}</div>
    <div>{name}</div>
    {rating ? <div>{rating}/5</div> : ''}
  </div>
)

StackableCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default StackableCard
