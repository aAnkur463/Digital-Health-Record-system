import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import ServiceScreen from "../screens/ServiceScreen"
const HomeScreen = () => {
  return (
    <>
      <Header />

      <Container>
        <Row id='main'>
          <Col md={4} className='my-5 py-4' id='main-text'>
            <h2>Best Care & Better Facility</h2>
            <p>Better you will feel if you eat a healthy meal.</p>
          </Col>
          <Col md={5} className='main_img my-2 py-2'>
            <Image src='./images/index.png' alt='hospital' id='image' />
          </Col>
        </Row>
        <ServiceScreen />
      </Container>
    </>
  )
}

export default HomeScreen
