import React, { useState } from 'react'
import { Row, Col, Typography } from 'antd'
import Project from './Project'
import ProjectModal from './ProjectModal'
import * as images from '../../assets/images'
import './style.css'

const Projects = () => {
  const { Title } = Typography
  const projects = [
    {
      title: 'Kittinan.site',
      description: 'A portfolio website to showcase my projects.',
      site: 'https://kittinan.site',
      source: 'https://github.com/ktno/kittinan.site',
      techList: [images.react, images.nodejs, images.alibabacloud],
      images: [
        images.projectA1,
        images.projectA2,
        images.projectA3,
        images.projectA4
      ]
    },
    {
      title: 'Self Service Kiosk',
      description:
        'A prototype web application to demonstrate how to integrate with National Digital Identity platform.',
      source: 'https://github.com/ktno/self-service-kiosk',
      techList: [images.react, images.nodejs, images.expressjs],
      images: [images.projectB1, images.projectB2, images.projectB3]
    },
    {
      title: 'Identity Authentication',
      description:
        'Authentication service using OpenID Connect in the Gluu server',
      techList: [images.docker, images.nodejs, images.expressjs],
      images: [images.projectC1, images.projectC2, images.projectC3]
    }
  ]

  const [projectImages, setProjectImages] = useState([])
  const [buttonTypes, setButtonTypes] = useState({
    learnMore: 'default',
    viewSite: 'default',
    viewSource: 'default'
  })
  const [modalVisiblility, setModalVisibility] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const handleMouseOverButton = button => {
    const className = { ...buttonTypes }
    className[button] = 'ant-btn-primary'
    setButtonTypes(className)
  }
  const handleMouseLeaveButton = button => {
    const className = { ...buttonTypes }
    className[button] = 'ant-btn-default'
    setButtonTypes(className)
  }

  return (
    <Col className='content'>
      <Row className='section' align='top' justify='center'>
        <Col span={24}>
          <Title className='heading'>Projects</Title>
          <Row align='middle' justify='center'>
            <Col span={20}>
              <Row align='middle' justify='center'>
                {projects.map(project => (
                  <Project
                    key={project.title}
                    project={project}
                    buttonTypes={buttonTypes}
                    handleMouseOverButton={handleMouseOverButton}
                    handleMouseLeaveButton={handleMouseLeaveButton}
                    setModalVisibility={setModalVisibility}
                    setModalContent={setModalContent}
                    setProjectImages={setProjectImages}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
        <ProjectModal
          buttonTypes={buttonTypes}
          handleMouseOverButton={handleMouseOverButton}
          handleMouseLeaveButton={handleMouseLeaveButton}
          modalVisiblility={modalVisiblility}
          setModalVisibility={setModalVisibility}
          modalContent={modalContent}
          projectImages={projectImages}
        />
      </Row>
    </Col>
  )
}

export default Projects
