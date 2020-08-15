import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import {} from '@ant-design/icons'
import './style.css'

const Education = props => {
  const { education } = props
  const { Title, Text } = Typography

  return (
    <Row className='section' align='middle' justify='center'>
      <Col span={24}>
        <Title className='heading'>Education</Title>
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
                {education.map(edu => (
                  <Row>
                    <Row align='middle'>
                      <img className='logo' src={edu.image} alt='kmitl'></img>
                      <Title className='title' style={{ marginLeft: 10 }}>
                        {edu.title}
                      </Title>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <Col>
                      <Row>
                        <Text
                          className='text'
                          style={{ fontStyle: 'italic', marginTop: 25 }}
                        >
                          {edu.major}
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Education
