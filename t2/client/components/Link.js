import React, { PropTypes } from 'react'

const Link = ({ active, children, onClickLink }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href='#'
      onClick={
        e => {
          e.preventDefault()
          onClickLink()
        }
      }
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClickLink: PropTypes.func.isRequired
}

export default Link
