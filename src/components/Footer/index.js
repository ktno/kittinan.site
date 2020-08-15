import React from 'react'
import { Row, Col } from 'antd'
import './style.css'

const Footer = () => {
  return (
    <>
      <Row className='footer' align='middle' justify='center'>
        <Col>
          © 2020 Kittinan. All rights reserved, made with
          <span role='img' aria-label='heart'>
            &nbsp;❤️&nbsp;
          </span>
          for a better web.
        </Col>
      </Row>
    </>
  )
}

export default Footer
