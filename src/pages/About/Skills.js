import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import ProgressiveImage from 'react-progressive-graceful-image'
import './style.css'

const Skills = props => {
  const { skills } = props
  const { Title, Text } = Typography

  return (
    <Row className='section' justify='center'>
      <Col span={24}>
        <Title className='heading'>Skills</Title>
        {skills.map(skill => (
          <Row className='rectangle-container' align='center' key={skill.title}>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 16 }}
              className='rectangle'
            >
              <Row>
                <Title className='title'>{skill.title}</Title>
                <Divider style={{ margin: 0 }} />
                <Row style={{ marginTop: 25 }}>
                  {skill.tech.map(tech => (
                    <Col className='tech-list' key={tech.name}>
                      <Row align='center' justify='center'>
                        <ProgressiveImage
                          src={tech.image}
                          placeholder={tech.image}
                        >
                          {(src, loading) => (
                            <img
                              className='tech-list-img'
                              src={src}
                              alt={tech.name}
                              style={{
                                filter: loading ? 'blur(10px)' : 'blur(0)',
                                transition: '1s filter linear'
                              }}
                            />
                          )}
                        </ProgressiveImage>
                      </Row>
                      <Row
                        align='center'
                        justify='center'
                        style={{ marginTop: '10px' }}
                      >
                        <Text className='text' style={{ fontSize: '20px' }}>
                          {tech.name}
                        </Text>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Row>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  )
}

export default Skills
