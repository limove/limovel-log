import React from 'react'

interface Props {}

const Log: React.FC<Props> = (props) => {
  return (
    <div>
      log: {props.children}
    </div>
  )
}

export default Log
