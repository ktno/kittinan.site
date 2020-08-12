import React, { useState } from 'react'
import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled'
import Header from './Header.js'
import './style.css'

const HeaderContainer = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const MINIMUM_SCROLL = 100
  const TIMEOUT_DELAY = 100

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    // const isScrolledDown = previousScrollTop <= currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setTimeout(() => {
      setShouldHideHeader(
        // isScrolledDown &&
        isMinimumScrolled
      )
    }, TIMEOUT_DELAY)
  })

  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <header className={`header-container shadow ${hiddenStyle}`}>
      <Header />
    </header>
  )
}

export default HeaderContainer
