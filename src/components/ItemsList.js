import React from 'react';
import Item from './Item';

const ItemsList = props => (
  <div>
    {props.items.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </div>
)

export default ItemsList;