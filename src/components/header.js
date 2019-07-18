import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <span style={{ margin: `0 0.5rem` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </span>
      <span style={{ margin: `0 10rem` }}>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
      </span>
      <span style={{ margin: `0 0.5rem` }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </span>
    </div>
  </header>
)

export default Header
