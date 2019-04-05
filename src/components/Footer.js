import React from 'react'

const Footer = props => {
  return (
    <footer className="pv4 ph3 ph5-m ph6-l mid-gray bt b--black-20">
    <small className="f6 db tc">© 2019 <b className="ttu">Claudio Teixeira</b>, All Rights Reserved</small>
    <div className="tc mt3">
      <a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
      <a href="/terms/" title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
      <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
    </div>
  </footer>
  )
}

export default Footer;