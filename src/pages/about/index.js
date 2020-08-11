import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { aboutAction } from '../../actions'
import { Typography } from 'antd'

const About = () => {
  const { Title, Text, Paragraph } = Typography

  return (
    <div className='content'>
      <Typography>
        <Title className='headline'>I'm Kittinan,</Title>
        <Paragraph className='subheading'>a developer.</Paragraph>
        <Title className='heading'>About</Title>
      </Typography>
      <Typography>
        <Title className='headline'>I'm Kittinan,</Title>
        <Paragraph className='subheading'>a developer.</Paragraph>
        <Title className='heading'>About</Title>
      </Typography>
      <Typography>
        <Title className='headline'>I'm Kittinan,</Title>
        <Paragraph className='subheading'>a developer.</Paragraph>
        <Title className='heading'>About</Title>
      </Typography>
      <Typography>
        <Title className='headline'>I'm Kittinan,</Title>
        <Paragraph className='subheading'>a developer.</Paragraph>
        <Title className='heading'>About</Title>
      </Typography>
      <Typography>
        <Title className='headline'>I'm Kittinan,</Title>
        <Paragraph className='subheading'>a developer.</Paragraph>
        <Title className='heading'>About</Title>
      </Typography>
    </div>
  )
}

export default About
