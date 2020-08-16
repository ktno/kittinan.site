import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import {} from '@ant-design/icons'
import './style.css'

const Experience = props => {
  const { experience } = props
  const { Title, Text } = Typography

  return (
    <Row className='section' align='middle' justify='center'>
      <Col span={24}>
        <Title className='heading'>Experience</Title>
        {experience.map(exp => (
          <Row className='rectangle-container' align='center' key={exp.title}>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 16 }}
              className='rectangle'
            >
              <Row>
                <Col>
                  <Row>
                    <Row
                      align='middle'
                      justify='start'
                      style={{ width: '100%' }}
                    >
                      <Col span={2} style={{ minWidth: 50 }}>
                        <img
                          className='logo'
                          src={exp.image}
                          alt={exp.title}
                        ></img>
                      </Col>
                      <Col span={12}>
                        <Title className='title rectangle-title'>
                          {exp.title}
                        </Title>
                      </Col>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <Col>
                      <Row>
                        <Text
                          className='text'
                          style={{ fontStyle: 'italic', marginTop: 25 }}
                        >
                          {exp.position}
                        </Text>
                      </Row>
                      <Row>
                        <Text
                          className='text'
                          style={{ fontSize: 20, marginTop: 25 }}
                        >
                          Responsibilities
                        </Text>
                      </Row>
                      <Row>
                        <ul>
                          {exp.responsibilities.map(resp => (
                            <li key={resp}>{resp}</li>
                          ))}
                        </ul>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='rectangle-footer' align='middle' justify='start'>
                <Text className='text' style={{ paddingLeft: 25 }}>
                  {exp.period}
                </Text>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  )
}

export default Experience
