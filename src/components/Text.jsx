import React from 'react'
import '.././style.css';
import { Typewriter } from 'react-simple-typewriter'

function Text() {
  return (
    <div  className="Typewriter__wrapper">
      <Typewriter
        
      words={[
          "React Js Developer",
          "Front End Developer",
        ]}
        loop = {true}
        typeSpeed={40}
        deleteSpeed={50}
      />
    </div>
  )
}

export default Text