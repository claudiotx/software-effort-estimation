import React, { useRef } from 'react';

import StepsItem from './StepsItem';

const Form = props => {
  // State management
  // const [total, setTotal] = useState(0);
  let tempTotal = 0;
  const childRefs = [];
  props.stepItems.forEach((item,i) => {
    childRefs[i] = useRef();
  });

  const handleOnClickConfirm = event => {
    tempTotal = 0;
    childRefs.forEach((childRef,i) => {
      tempTotal += childRefs[i].current.getDays();
    });
    // setTotal(tempTotal);
    props.onSubmit(tempTotal);
  }

  return (
    <main className="pa2 black-80">
      <form className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <div className="mw6 center">
            {props.stepItems.map((item, i) => (
              <StepsItem ref={childRefs[i]} key={i} {...item} />
            ))}
          </div>
        </fieldset>
        <div>
        <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="#0" onClick={handleOnClickConfirm}>
          <span className="f6 ml3 pr2">Confirm</span>
            <svg className="dib h1 w1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
              <path fill="#FFFFFF" d="M19.354 10.146l-6-6c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.146 5.146h-16.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h16.293l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l6-6c0.195-0.195 0.195-0.512 0-0.707z" />
            </svg>
        </a>
        </div>
      </form>
    </main>
  )
}

export default Form;