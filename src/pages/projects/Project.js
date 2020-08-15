import React, { useState } from 'react'
import { Row, Col, Typography, Skeleton, Button } from 'antd'
import './style.css'

const Project = props => {
  const {
    project,
    buttonTypes,
    handleMouseOverButton,
    handleMouseLeaveButton,
    setModalVisibility,
    setModalContent
  } = props
  const { Title, Text } = Typography
  const { Image } = Skeleton

  const [projectDetailOpacity, setProjectDetailOpacity] = useState(0)

  const handleMouseOverProject = () => {
    setProjectDetailOpacity(1)
  }
  const handleMouseLeaveProject = () => {
    setProjectDetailOpacity(0)
  }
  const handleMouseClickLearnMore = () => {
    const { ...content } = project

    setModalVisibility(true)
    setModalContent(content)
  }

  return (
    <Col className='project-container' span={6}>
      <Row align='middle' justify='center' style={{ minHeight: 'inherit' }}>
        <Col className='project' span={24}>
          <Row>
            <Col span={24}>
              <Image className='project-img' src='' alt='project' />
              <Row
                align='middle'
                justify='center'
                style={{
                  height: 150,
                  backgroundColor: 'rgba(250, 250, 250, 0.5)'
                }}
              >
                <Col span={20}>
                  <Title className='title' style={{ textAlign: 'start' }}>
                    {project.title}
                  </Title>
                  <div className='project-desc'>{project.description}</div>
                </Col>
              </Row>
              <Row
                justify='center'
                style={{
                  height: 350,
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  padding: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  opacity: projectDetailOpacity,
                  transition: 'opacity 0.25s ease-in-out'
                }}
                onMouseOver={handleMouseOverProject}
                onMouseLeave={handleMouseLeaveProject}
              >
                <Col style={{ height: '100%' }}>
                  <Title className='title'>{project.title}</Title>
                  <Row
                    align='middle'
                    style={{
                      marginTop: 75,
                      height: 'calc(100% - 240px)'
                    }}
                    justify='space-around'
                  >
                    {project.techList.map(tech => (
                      <Col className='tech-img-container' span={5}>
                        <img className='tech-img' src={tech} alt={tech}></img>
                      </Col>
                    ))}
                  </Row>
                  <Button
                    className={buttonTypes.learnMore}
                    style={{
                      width: 150,
                      height: 40,
                      color: 'black',
                      marginTop: 75
                    }}
                    onClick={() => handleMouseClickLearnMore()}
                    onMouseOver={() => handleMouseOverButton('learnMore')}
                    onMouseLeave={() => handleMouseLeaveButton('learnMore')}
                  >
                    <Text className='text'>LEARN MORE</Text>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Project
