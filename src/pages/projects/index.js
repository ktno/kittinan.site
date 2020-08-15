import React, { useState } from 'react'
import { Row, Col, Typography } from 'antd'
import Project from './Project'
import ProjectModal from './ProjectModal'
import react from '../../assets/images/react.png'
import nodejs from '../../assets/images/nodejs.png'
import nginx from '../../assets/images/nginx.png'
import html5 from '../../assets/images/html5.png'
import jsx from '../../assets/images/jsx.png'
import './style.css'

const Projects = () => {
  const { Title } = Typography
  const projects = [
    {
      title: 'Project A',
      description: 'Description',
      site: 'https://kittinan.site',
      source: 'https://github.com/ktno/kittinan.site',
      techList: [react, nodejs, nginx]
    },
    {
      title: 'Project B',
      description: 'Description',
      site: 'https://kittinan.site',
      source: 'https://github.com/ktno/kittinan.site',
      techList: [react, nodejs]
    },
    {
      title: 'Project C',
      description: 'Description',
      site: 'https://kittinan.site',
      source: 'https://github.com/ktno/kittinan.site',
      techList: [html5, nodejs]
    },
    {
      title: 'Project D',
      description: 'Description',
      site: 'https://kittinan.site',
      source: 'https://github.com/ktno/kittinan.site',
      techList: [nodejs]
    }
  ]

  const [buttonTypes, setButtonTypes] = useState({
    learnMore: 'default',
    viewSite: 'default',
    viewSource: 'default'
  })
  const [modalVisiblility, setModalVisibility] = useState(false)
  const [modalContent, setModalContent] = useState({
    description: '',
    site: '#',
    source: '#'
  })

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
        />
      </Row>
    </Col>
  )
}

export default Projects
