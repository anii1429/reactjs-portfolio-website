import React from 'react'
import '.././style.css';
import { Typewriter } from 'react-simple-typewriter'

function Text() {
  return (
    <Typewriter
    words={[
        "React Js Developer",
        "Front End Developer",
      ]}
      loop = {true}
      typeSpeed={40}
      deleteSpeed={50}
    />
  )
}

export default Text