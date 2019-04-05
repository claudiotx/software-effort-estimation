import React, { useState } from 'react';

const Notes = props => {
  // State management
  const [notes, setNotes] = useState('')
  const [project, setProject] = useState('')

  // Form handler
  const handleSubmit = event => {
    props.onSubmit(notes, project);
  }

  return (
    <main className="pa4 black-80">
      <form className="measure center" onSubmit={handleSubmit}>
        <div>
          <label forhtml="name" className="f6 b db mb2">Project <span className="normal black-60">*</span></label>
          <input id="name" className="w-100 input-reset ba b--black-20 pa2 mb2 tc" type="text" required onChange={event => setProject(event.target.value)}/>
        </div>
        <div>
          <label forhtml="comment" className="f6 b db mb2">Project Notes </label>
          <textarea id="comment" rows={10} name="comment" className="w-100 tc border-box hover-black ba b--black-20 pa2 br2 mb2" onChange={event => setNotes(event.target.value)} defaultValue={""} />
          {/* <small id="comment-desc" className="f6 black-60">Add here your project notes. </small> */}
        </div>


        <div className="ph3">
          <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="#0" onClick={handleSubmit}>
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

export default Notes;