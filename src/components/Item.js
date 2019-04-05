import React from 'react'

const Item = props => {
  return (
    <div style={{ margin: '1em' }}>
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.make}</div>
        <div>{props.model}</div>
      </div>
    </div>
  )
}

export default Item;