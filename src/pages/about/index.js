import React from 'react'
import { Row, Col, Typography, Avatar, Divider } from 'antd'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import * as images from '../../assets/images'
import './style.css'

const About = () => {
  const { Title, Paragraph } = Typography
  const roles = ['developer', 'learner', 'dreamer', 'gamer', 'cat lover']
  const skills = [
    {
      title: 'Javascript',
      tech: [
        {
          name: 'Javascript',
          image: images.javascript
        },
        {
          name: 'React',
          image: images.react
        },
        {
          name: 'Node.js',
          image: images.nodejs
        },
        {
          name: 'Expressjs',
          image: images.expressjs
        }
      ]
    },
    {
      title: 'HTML',
      tech: [
        {
          name: 'HTML',
          image: images.html5
        },
        {
          name: 'JSX',
          image: images.jsx
        }
      ]
    },
    {
      title: 'CSS',
      tech: [
        {
          name: 'CSS3',
          image: images.css3
        },
        {
          name: 'Bootstrap',
          image: images.bootstrap
        },
        {
          name: 'Ant Design',
          image: images.antdesign
        }
      ]
    },
    {
      title: 'Database',
      tech: [
        {
          name: 'MongoDB',
          image: images.mongodb
        },
        {
          name: 'Firebase',
          image: images.firebase
        }
      ]
    },
    {
      title: 'Container',
      tech: [
        {
          name: 'Docker',
          image: images.docker
        }
      ]
    },
    {
      title: 'Cloud Platform',
      tech: [
        {
          name: 'Google Cloud Platform',
          image: images.googlecloudplatform
        },
        {
          name: 'Alibaba Cloud',
          image: images.alibabacloud
        }
      ]
    },
    {
      title: 'Version Control',
      tech: [
        {
          name: 'Github',
          image: images.github
        },
        {
          name: 'Source Tree',
          image: images.sourcetree
        }
      ]
    },
    {
      title: 'Wireframe',
      tech: [
        {
          name: 'MockFlow',
          image: images.mockflow
        }
      ]
    }
  ]
  const experience = [
    {
      title: 'Tuaton Co.,Ltd.',
      image: images.tuaton,
      position: 'Software Engineer',
      responsibilities: [
        'Designed APIs with Node.js and Expressjs.',
        'Implemented web applications with HTML, CSS, and React.',
        'Deployed and maintained APIs and web applications on Ubuntu server.',
        'Guide best practices around accessible, semantic UI/UX.',
        'Set up and maintained an identity server, Gluu.'
      ],
      period: 'Jun 2019 - Present | Bangkok, Thailand'
    },
    {
      title: 'Tangerine Co.,Ltd.',
      image: images.tangerine,
      position: 'Software Developer, Intern',
      responsibilities: [
        'Designed a RESTful API with Python and Flask.',
        'Implemented a Google authenticaition service with OAuth2.'
      ],
      period: 'Jun 2018 - Jul 2018 | Bangkok, Thailand'
    }
  ]
  const education = [
    {
      title: "King Mongut's Institute of Technology Ladkrabang",
      image: images.kmitl,
      major: 'Bachelor of Engineer in Computer Engineering, 2019'
    }
  ]

  return (
    <Col className='content'>
      {/* first section - welcome */}
      <div
        style={{
          backgroundImage: `url(${images.cover})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 400px)'
        }}
      >
        <Row className='section' align='middle' justify='center'>
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
                        key={role}
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
      {/* second section - introduction */}
      <Row className='section' align='middle' justify='center'>
        <Col style={{ maxWidth: '390px' }}>
          <Row align='middle' justify='center'>
            <Avatar src={images.profile} size={140} />
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Col>
              <Row align='middle' justify='center'>
                <Paragraph className='text' style={{ color: '#45b29a' }}>
                  Hi.
                </Paragraph>
              </Row>
              <Row align='middle' justify='center'>
                <Paragraph className='text' style={{ color: '#45b29a' }}>
                  I'm a software developer based in Bangkok, Thailand. I have a
                  passion for software development and
                  <b> I love to code because it is usable art</b>.
                </Paragraph>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* third section - skills */}
      <Skills skills={skills} />
      {/* fourth section - experience */}
      <Experience experience={experience} />
      {/* fifth section - education */}
      <Education education={education} />
    </Col>
  )
}

export default About
