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
          <Row className='rectangle-container' align='center'>
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
                    <Row align='middle'>
                      <img className='logo' src={exp.image} alt='tuaton'></img>
                      <Title className='title' style={{ marginLeft: 10 }}>
                        {exp.title}
                      </Title>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <Col>
                      <Row>
                        <Text
                          className='text'
                          style={{ fontStyle: 'italic', marginTop: 25 }}
                        >
                          {exp.description}
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
                            <li>{resp}</li>
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
