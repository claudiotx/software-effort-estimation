import React from 'react'

const Totals = props => {
  return (
    <article className="tc" data-name="slab-stat-small">
      <h1>6. Estimated Effort</h1>
      <div className="pa2 black-80">
        <dl className="fl fn-l w-100 w-auto-l lh-title">
          <dd className="f3 fw3 ml0">Total Months</dd>
          <dd className="f2 fw6 ml0">{Math.ceil(props.total / 30)}</dd>
        </dl>
        <dl className="fl fn-l w-100 w-auto-l lh-title">
          <dd className="f3 fw3 ml0">Total Days</dd>
          <dd className="f2 fw6 ml0">{props.total}</dd>
        </dl>
        <dl className="fl fn-l w-100 w-auto-l lh-title">
          <dd className="f3 fw3 ml0">Total Hours</dd>
          <dd className="f2 fw6 ml0">{props.total * 24}</dd>
        </dl>
        <dl className="fl fn-l w-100 w-auto-l lh-title">
          <dd className="f3 fw3 ml0">Size of Project</dd>
          <dd className="f2 fw6 ml0">{props.total > 60 ? 'large' : 'small'}</dd>
        </dl>
      </div>
    </article>
  )
}

export default Totals;