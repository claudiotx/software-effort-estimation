import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
  // State management
  const [carMaker, setCarMaker] = useState('')

  // Form handler
  const handleSubmit = event => {
    event.preventDefault();
    axios.get(`http://localhost:3600/cars/1`).then(resp => {
      props.onSubmit(resp.data); // pass data to outside
      setCarMaker(''); // reset form
    })
    console.log('handleSubmit')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="m"
        autoFocus
        value={carMaker}
        onChange={event => setCarMaker(event.target.value)}
        // placeholder="Car maker"
        required
      />
      <label htmlFor="m" className="name">
        <span className="label-text">Maker</span>
      </label>
      <input type="submit" value="Add Car" className="button"/>
    </form>
  )
}

export default Form;