import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Writer = () => {



  return (
    <div className='App'>
      <h1>
        <span>
          <Typewriter
            words={['MERN Developer', 'Web Designer', 'App Developer', 'Pytorch Developer','NextJs Developer','DL / ML Engineer']}
            loop={false}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
      
          />
        </span>
      </h1>
    </div>
  )
}
export default  Writer