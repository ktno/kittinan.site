import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Row, Col, Avatar, Menu } from 'antd'
import ProgressiveImage from 'react-progressive-graceful-image'
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
          <ProgressiveImage src='logo.png' placeholder='logo.png'>
            {(src, loading) => (
              <Avatar
                src={src}
                size={55}
                style={{
                  filter: loading ? 'blur(10px)' : 'blur(0)',
                  transition: '1s filter linear'
                }}
              ></Avatar>
            )}
          </ProgressiveImage>
        </Col>
        <Col
          xs={{ span: 4 }}
          sm={{ span: 4 }}
          md={{ span: 2 }}
          lg={{ span: 4 }}
          offset={12}
        >
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
