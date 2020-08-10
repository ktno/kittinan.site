import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { aboutAction } from '../../actions'
import { Div } from 'atomize'

const App = () => {
  
  return (
    <>
      <h1 className='headline'>I'm Kittinan,</h1>
      <h2 className='subheading'>a developer</h2>
      <h3 className='heading'>About</h3>
    </>
  )
}

export default App
