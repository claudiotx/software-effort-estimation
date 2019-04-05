import React from 'react'
// import { Printd } from 'printd'


const Print = props => {

  const handleOnClickPrint = event => {
    window.print();
    // const d = new Printd();
    // d.print(document.getElementById('mainContainer'))
  };

  return (
    <article className="tc" data-name="slab-stat-small">
      <h1>7. Print </h1>
      <div className="pa2 black-80">
      <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="#0" title="Print" onClick={handleOnClickPrint}>
        <svg className="dib h2 w2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={20} height={20} viewBox="0 0 20 20">
          <path fill="#FFFFFF" d="M18.5 4h-1.5v-2.5c0-0.827-0.673-1.5-1.5-1.5h-11c-0.827 0-1.5 0.673-1.5 1.5v2.5h-1.5c-0.827 0-1.5 0.673-1.5 1.5v9c0 0.827 0.673 1.5 1.5 1.5h1.5v2.5c0 0.827 0.673 1.5 1.5 1.5h11c0.827 0 1.5-0.673 1.5-1.5v-2.5h1.5c0.827 0 1.5-0.673 1.5-1.5v-9c0-0.827-0.673-1.5-1.5-1.5zM4 1.5c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5v2.5h-12v-2.5zM15.5 19h-11c-0.276 0-0.5-0.224-0.5-0.5v-6.5h12v6.5c0 0.276-0.224 0.5-0.5 0.5zM19 14.5c0 0.276-0.224 0.5-0.5 0.5h-1.5v-3h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-15c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v3h-1.5c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v9z" />
          <path fill="#FFFFFF" d="M14.5 14h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
          <path fill="#FFFFFF" d="M14.5 16h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
          <path fill="#FFFFFF" d="M14.5 18h-9c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h9c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
          <path fill="#FFFFFF" d="M16.5 9c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.5 7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z" />
        </svg>
        <span className="f6 ml3 pr2">Print</span>
      </a>
      </div>
    </article>
  )
}

export default Print;