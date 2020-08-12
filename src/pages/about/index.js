import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { aboutAction } from '../../actions'
import { Row, Col, Typography, Avatar, Divider, Card } from 'antd'
import cover from '../../assets/images/cover.png'
import profile from '../../assets/images/profile.jpg'
import javascript from '../../assets/images/javascript.png'
import react from '../../assets/images/react.png'
import nodejs from '../../assets/images/nodejs.png'
import html5 from '../../assets/images/html5.png'
import jsx from '../../assets/images/jsx.png'
import tuaton from '../../assets/images/tuaton.png'
import tangerine from '../../assets/images/tangerine.png'
import './style.css'

const About = () => {
  const { Title, Text, Paragraph } = Typography
  const roles = ['developer', 'learner', 'dreamer', 'gamer', 'cat lover']

  useEffect(() => {
    console.log(roles[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles[0]])

  return (
    <Col className='content'>
      {/* first section - welcome */}
      <div
        style={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'calc(100vh - 400px)'
        }}
      >
        <Row
          className='section'
          style={{ marginTop: 0 }}
          align='middle'
          justify='center'
        >
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
            <Avatar src={profile} size={140} />
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
      <Row className='section' justify='center'>
        <Col span={24}>
          <Title className='heading'>Skills</Title>
          <Row className='rectangle-container' align='center'>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 16 }}
              className='rectangle'
            >
              <Row>
                <Title className='title'>Javascript</Title>
                <Divider style={{ margin: 0 }} />
                <Row style={{ marginTop: 25 }}>
                  <Col className='tech-list'>
                    <Row>
                      <img
                        className='tech-list-img'
                        src={javascript}
                        alt='javascript'
                      />
                    </Row>
                    <Row align='center' style={{ marginTop: '10px' }}>
                      <Text className='text' style={{ fontSize: '20px' }}>
                        Javascript
                      </Text>
                    </Row>
                  </Col>
                  <Col className='tech-list'>
                    <Row>
                      <img className='tech-list-img' src={react} alt='react' />
                    </Row>
                    <Row align='center' style={{ marginTop: '10px' }}>
                      <Text className='text' style={{ fontSize: '20px' }}>
                        React
                      </Text>
                    </Row>
                  </Col>
                  <Col className='tech-list'>
                    <Row>
                      <img
                        className='tech-list-img'
                        src={nodejs}
                        alt='nodejs'
                      />
                    </Row>
                    <Row align='center' style={{ marginTop: '10px' }}>
                      <Text className='text' style={{ fontSize: '20px' }}>
                        Node.js
                      </Text>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row className='rectangle-container' align='center'>
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 16 }}
              className='rectangle'
            >
              <Row>
                <Title className='title'>HTML</Title>
                <Divider style={{ margin: 0 }} />
                <Row style={{ marginTop: 25 }}>
                  <Col className='tech-list'>
                    <Row>
                      <img className='tech-list-img' src={html5} alt='html5' />
                    </Row>
                    <Row align='center' style={{ marginTop: '10px' }}>
                      <Text className='text' style={{ fontSize: '20px' }}>
                        HTML
                      </Text>
                    </Row>
                  </Col>
                  <Col className='tech-list'>
                    <Row>
                      <img className='tech-list-img' src={jsx} alt='jsx' />
                    </Row>
                    <Row align='center' style={{ marginTop: '10px' }}>
                      <Text className='text' style={{ fontSize: '20px' }}>
                        JSX
                      </Text>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* fourth section - experience */}
      <Row className='section' align='middle' justify='center'>
        <Col span={24}>
          <Title className='heading'>Experience</Title>
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
                      <img className='company' src={tuaton} alt='tuaton'></img>
                      <Title className='title' style={{ marginLeft: 10 }}>
                        Tuaton Co.,Ltd.
                      </Title>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <Col>
                      <Row>
                        <Text className='text' style={{ fontStyle: 'italic' }}>
                          SaaS platform that enables enterprise companies to
                          build, run, and measure their positive impact
                          campaigns
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
                        <ui>
                          <li>
                            Contribute core features across entire stack (20k+
                            lines of code, 250+ pulls)
                          </li>
                          <li>
                            Lead front-end development, creating and documenting
                            app-wide design system
                          </li>
                          <li>
                            Oversee transition from page-based styles to modular
                            component styles
                          </li>
                          <li>
                            Guide best practices around accessible, semantic
                            UI/UX
                          </li>
                          <li>
                            Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery
                            // Sass // HTML, JSX, Haml
                          </li>
                        </ui>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='rectangle-footer' align='middle' justify='start'>
                <Text className='text' style={{ paddingLeft: 25 }}>
                  Jun 2019 - Present | Bangkok, Thailand
                </Text>
              </Row>
            </Col>
          </Row>
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
                      <img
                        className='company'
                        src={tangerine}
                        alt='tangerine'
                      ></img>
                      <Title className='title' style={{ marginLeft: 10 }}>
                        Tangerine Co.,Ltd.
                      </Title>
                    </Row>

                    <Divider style={{ margin: 0 }} />
                    <Col>
                      <Row>
                        <Text className='text' style={{ fontStyle: 'italic' }}>
                          SaaS platform that enables enterprise companies to
                          build, run, and measure their positive impact
                          campaigns
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
                        <ui>
                          <li>
                            Contribute core features across entire stack (20k+
                            lines of code, 250+ pulls)
                          </li>
                          <li>
                            Lead front-end development, creating and documenting
                            app-wide design system
                          </li>
                          <li>
                            Oversee transition from page-based styles to modular
                            component styles
                          </li>
                          <li>
                            Guide best practices around accessible, semantic
                            UI/UX
                          </li>
                          <li>
                            Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery
                            // Sass // HTML, JSX, Haml
                          </li>
                        </ui>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className='rectangle-footer' align='middle' justify='start'>
                <Text className='text' style={{ paddingLeft: 25 }}>
                  Jun 2019 - Present | Bangkok, Thailand
                </Text>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default About
