import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Avatar, Menu, Button } from 'antd'
import './style.css'

const Header = () => {
  const location = useLocation()
  const history = useHistory()
  const [page, setPage] = useState(location.pathname.replace('/', ''))

  const handleClick = event => {
    setPage(event.key)
    history.push(`/${event.key}`)
  }

  return (
    <>
      <Row className='header' align='middle'>
        <Col span={1} offset={3}>
          <Avatar src='logo.png' size={55}></Avatar>
        </Col>
        <Col span={5} offset={12}>
          <Menu
            onClick={handleClick}
            mode='horizontal'
            defaultSelectedKeys={[page]}
          >
            <Menu.Item key='about'>About</Menu.Item>
            <Menu.Item key='projects'>Projects</Menu.Item>
            <Menu.Item key='contact'>Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  )
}

export default Header
