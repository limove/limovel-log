import React from 'react'
import './log.less'

interface Props {}

const Log: React.FC<Props> = (props) => {
  return (
    <div className="limove-log">
      log: {props.children}
    </div>
  )
}

export default Log
