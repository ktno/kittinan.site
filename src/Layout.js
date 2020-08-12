import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BackTop } from 'antd'
import { UpCircleFilled } from '@ant-design/icons'
import './index.css'

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      <BackTop visibilityHeight={700}>
        <UpCircleFilled className='back-top' />
      </BackTop>
    </div>
  )
}

export default Layout
