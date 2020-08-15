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
    }
  ]
  const experience = [
    {
      title: 'Tuaton Co.,Ltd.',
      image: images.tuaton,
      description:
        'SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns',
      responsibilities: [
        'Contribute core features across entire stack (20k+ lines of code, 250+ pulls)',
        'Lead front-end development, creating and documenting app-wide design system',
        'Oversee transition from page-based styles to modular component styles',
        'Guide best practices around accessible, semantic UI/UX',
        'Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml'
      ],
      period: 'Jun 2019 - Present | Bangkok, Thailand'
    },
    {
      title: 'Tangerine Co.,Ltd.',
      image: images.tangerine,
      description:
        'SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns',
      responsibilities: [
        'Contribute core features across entire stack (20k+ lines of code, 250+ pulls)',
        'Lead front-end development, creating and documenting app-wide design system',
        'Oversee transition from page-based styles to modular component styles',
        'Guide best practices around accessible, semantic UI/UX',
        'Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml'
      ],
      period: 'Jun 2019 - Present | Bangkok, Thailand'
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
