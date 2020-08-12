import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { contactAction } from '../../actions'
import { MailTwoTone, GithubFilled, LinkedinFilled } from '@ant-design/icons'
import { Row, Col, Typography } from 'antd'
import './style.css'

const Contact = () => {
  const { Title, Text } = Typography

  return (
    <Col className='content'>
      <Row className='section' align='top' justify='center'>
        <Col span={24}>
          <Title className='heading'>Contact</Title>
          <Row align='middle' justify='center'>
            <Col
              style={{
                width: 350,
                marginTop: 25
              }}
            >
              <Row style={{ marginTop: 50, paddingLeft: 50 }}>
                <Col>
                  <Row align='middle'>
                    <a href='mailto:kittinan.ktt@gmail.com'>
                      <MailTwoTone className='logo' twoToneColor='#d44638' />
                      <Text className='text' style={{ marginLeft: 25 }}>
                        kittinan.ktt@gmail.com
                      </Text>
                    </a>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 25, paddingLeft: 50 }}>
                <Col>
                  <Row align='middle' style={{ marginTop: 10 }}>
                    <a href='https://github.com/ktno'>
                      <GithubFilled
                        className='logo'
                        style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                      />
                      <Text className='text' style={{ marginLeft: 25 }}>
                        github.com/ktno
                      </Text>
                    </a>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 25, paddingLeft: 50 }}>
                <Col>
                  <Row
                    align='middle'
                    style={{
                      marginTop: 10
                    }}
                  >
                    <a href='https://linkedin.com/in/kittinanounlum'>
                      <LinkedinFilled
                        className='logo'
                        style={{ color: '#0e76a8' }}
                      />
                      <Text className='text' style={{ marginLeft: 25 }}>
                        linkedin.com/in/kittinanounlum
                      </Text>
                    </a>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Contact
