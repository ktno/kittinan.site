import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../assets/images/logo.svg'
import './style.css'
import { popNow, newPeoplePerSec } from '../utils/worldPopulation'
import * as actions from './actions'

const App = () => {
  const { population } = useSelector(state => state.AppReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(actions.setPopulation(popNow()))
    }, 1 / newPeoplePerSec)

    return () => clearTimeout(timer)
  }, [dispatch])

  return (
    <div className='App'>
      <header className='header'>
        <img src={logo} className='logo' alt='logo' />
        <p style={{ fontSize: 'calc(20px + 2vmin)' }}>React boiletplate</p>
        <p>World population in 2020 is approximately</p>
        <span>{population}</span>
        <a
          className='link'
          href='https://github.com/ktno/react-boilerplate'
          target='_blank'
          rel='noopener noreferrer'
          data-testid='github-link'
        >
          Github
        </a>
      </header>
    </div>
  )
}

export default App
