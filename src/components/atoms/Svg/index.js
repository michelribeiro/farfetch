import React, { Component } from "react";

const InlineSVG = (props) => {
  const { className, icon } = props
  const _require = require.context('../../', true)
  return (
    <span 
      className={`svg-icon ${className}`} 
      dangerouslySetInnerHTML={{ __html: _require(icon, true) }} />
  )
}

export default InlineSVG