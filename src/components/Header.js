import React from 'react'

const Header = props => {
  return (
    <header className="w-100 pa3 ph5-ns bg-white bb b--black-20">
    <div className="db dt-ns center w-100">
      <div className="db dtc-ns v-mid tl w-50">
        <a href="/" className="dib f5 f4-ns fw6 mt0 mb1 link black-70" title="Home">
          Easy Software Effort Cost Estimation
        </a>
      </div>
      <nav className="dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns dn db-ns">
        <a title="Documentation" href="/about" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib">
          About
        </a>
        <a title="Tachyons on GitHub" href="http://github.com/claudiotx/" className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
          GitHub
        </a>
      </nav>
    </div>
  </header>
  )
}

export default Header;