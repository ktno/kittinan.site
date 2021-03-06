import React, { useRef } from 'react'
import { Row, Col, Modal, Carousel, Typography, Button } from 'antd'
import {
  CloseCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  HomeOutlined,
  GithubOutlined
} from '@ant-design/icons'
import ProgressiveImage from 'react-progressive-graceful-image'
import './style.css'

const ProjectModal = props => {
  const {
    projectImages,
    buttonTypes,
    handleMouseOverButton,
    handleMouseLeaveButton,
    modalVisiblility,
    setModalVisibility,
    modalContent
  } = props
  const { Title, Text } = Typography
  const carousel = useRef()

  const handleModalCancel = () => {
    setModalVisibility(false)
  }

  return (
    <Modal
      visible={modalVisiblility}
      footer={null}
      maskClosable={true}
      closeIcon={<CloseCircleFilled />}
      onCancel={handleModalCancel}
      width={685}
    >
      <Carousel
        class='modal-carousel'
        autoplay
        dots={false}
        autoplaySpeed={3000}
        ref={carousel}
      >
        {projectImages.map(image => (
          <Row key={image}>
            <ProgressiveImage src={image} placeholder={image}>
              {(src, loading) => (
                <img
                  className='modal-img'
                  src={src}
                  alt={image}
                  style={{
                    filter: loading ? 'blur(10px)' : 'blur(0)',
                    transition: '1s filter linear'
                  }}
                />
              )}
            </ProgressiveImage>
          </Row>
        ))}
      </Carousel>
      <Row style={{ height: 45, position: 'relative', top: -60 }}>
        <Col span={12}>
          <LeftCircleFilled
            height={45}
            style={{
              fontSize: 45,
              color: 'rgba(245, 245, 245, 0.8)',
              paddingLeft: 10
            }}
            onClick={() => {
              carousel.current.prev()
            }}
          />
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <RightCircleFilled
            height={45}
            style={{
              fontSize: 45,
              color: 'rgba(245, 245, 245, 0.8)',
              paddingRight: 10
            }}
            onClick={() => {
              carousel.current.next()
            }}
          />
        </Col>
      </Row>
      <Row className='modal-footer'>
        <Col span={24}>
          <Title className='title' style={{ position: 'relative', top: -20 }}>
            {modalContent.title}
          </Title>
          <Text className='text' style={{ position: 'relative', top: -10 }}>
            {modalContent.description}
          </Text>
          <Row style={{ marginTop: 25 }}>
            {modalContent.site && (
              <Button
                className={buttonTypes.viewSite}
                href={modalContent.site}
                icon={<HomeOutlined />}
                style={{ color: 'black', marginRight: 10 }}
                onMouseOver={() => handleMouseOverButton('viewSite')}
                onMouseLeave={() => handleMouseLeaveButton('viewSite')}
              >
                <Text className='text'>VIEW SITE</Text>
              </Button>
            )}
            {modalContent.source && (
              <Button
                className={buttonTypes.viewSource}
                href={modalContent.source}
                icon={<GithubOutlined />}
                style={{
                  color: 'black'
                }}
                onMouseOver={() => handleMouseOverButton('viewSource')}
                onMouseLeave={() => handleMouseLeaveButton('viewSource')}
              >
                <Text className='text'>VIEW SOURCE</Text>
              </Button>
            )}
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default ProjectModal
