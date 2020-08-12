import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { aboutAction } from '../../actions'
import { Row, Col, Typography, Avatar, Divider, Card } from 'antd'
import cover from '../../assets/images/cover.png'
import profile from '../../assets/images/profile.jpg'
import javascript from '../../assets/images/javascript.png'
import react from '../../assets/images/react.png'
import './style.css'

const About = () => {
  const { Title, Text, Paragraph } = Typography
  const roles = ['developer', 'learner', 'dreamer', 'gamer', 'cat lover']

  useEffect(() => {
    console.log(roles[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles[0]])

  return (
    <Col className='content'>
      {/* first section - welcome */}
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 400px)'
        }}
      >
        <Row
          className='section'
          style={{ marginTop: 0 }}
          align='middle'
          justify='center'
        >
          <Col span={24}>
            <Title
              className='headline'
              style={{
                marginBottom: 0,
                filter: 'drop-shadow(0 0 0.2rem black)'
              }}
            >
              I'm Kittinan.
            </Title>
            <Row align='middle' justify='center'>
              <Paragraph
                className='subheading'
                style={{
                  marginBottom: 0,
                  filter: 'drop-shadow(0 0 0.1rem black)'
                }}
              >
                And I'm a
              </Paragraph>
              <div className='role subheading'>
                <div className='role_container'>
                  <ul className='role_container_list'>
                    {roles.map(role => (
                      <li
                        className='role_container_list_item'
                        style={{ filter: 'drop-shadow(0 0 0.1rem black)' }}
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
  )
}

export default About
