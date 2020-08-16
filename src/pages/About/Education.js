import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import ProgressiveImage from 'react-progressive-graceful-image'
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
                  <Row key={edu.title}>
                    <Row
                      align='middle'
                      justify='start'
                      style={{ width: '100%' }}
                    >
                      <Col span={2} style={{ minWidth: 50 }}>
                        <ProgressiveImage
                          src={edu.image}
                          placeholder={edu.image}
                        >
                          {(src, loading) => (
                            <img
                              className='logo'
                              src={src}
                              alt={edu.title}
                              style={{
                                filter: loading ? 'blur(10px)' : 'blur(0)',
                                transition: '1s filter linear'
                              }}
                            />
                          )}
                        </ProgressiveImage>
                      </Col>
                      <Col span={16}>
                        <Title className='title rectangle-title'>
                          {edu.title}
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
