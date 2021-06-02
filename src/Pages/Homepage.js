import React from "react";
import { Container, Carousel } from "react-bootstrap";
import salon1 from "./../Images/salon1.jpg";
import salon2 from "./../Images/salon2.jpg";
import salon3 from "./../Images/salon3.jpg";
import "./Homepage.css";

export default function Homepage() {
  return (
    <Container>
      <h1 className="text-center">Testas</h1>
      <Carousel fade>
        <Carousel.Item className="image">
          <img className="d-block w-100" src={salon1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="image">
          <img className="d-block w-100" src={salon2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="image">
          <img className="d-block w-100" src={salon3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
