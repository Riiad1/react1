import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../Components/home.scss'
import Exterior2 from '../Media/photo10.1.jpg';
import Bazenti from '../Media/photo10.2.jpg';
import Interior2 from '../Media/photo10.3.jpg';
import Dasma from '../Media/photo10.4.jpg';
import Sallavogel from '../Media/p11.1.jpg';
import Salla2 from '../Media/salla2.jpg';
import Bazenti1 from '../Media/photo9.jpg'
import Food1 from '../Media/food.8.jpg'
import Food2 from '../Media/food.5.jpg'
import Drink1 from '../Media/food.6.jpg'
import Footer from './Footer';
function Home() {
  const photos = [
    {
      id:1,
      img: Exterior2,
      alt: 'Pamja e Salles 2'
    },
    {
      id:2,
      img: Bazenti,
      alt:'Bazenti'
    },
    {
      id:3,
      img: Interior2,
      alt:'Interiori Salles 2'
    },
    {
      id:4,
      img: Dasma,
      alt:'Dasma'
    }
  ];

  const Cards = [
    {
      id:1,
      img: Sallavogel,
      dsc:"The ideal place for your Party",
      dsc1: "Usable space for 70-150 people"
    },
    {
      id:2,
      img: Bazenti1,
      dsc: "Satisfy your desire for outdoor dining at Natural Restaurant",
      dsc1: "Usable space for 40-80 people"
    },
    {
      id:3,
      img: Salla2,
      dsc:"For your wedding to remain unforgettable",
      dsc1: "Usable space for 200-500 people"
    },
    {
      id:4,
      img:Food1,
      dsc:"Grilled shrimp",
      dsc1:"Grilled shrimp prepared with dedication so that the taste is at the highest level"
    },
    {
      id:5,
      img: Food2,
      dsc:"Pasta",
      dsc1: " Pasta me Salmon të Tymosur , shije e pakrahasueshme"
    },
    {
      id:6,
      img: Drink1,
      dsc:"Moito",
      dsc1:"Freskohu në ambientin tonë me koktejet tona, të përgaditura me plot përkushtim"
    }

  ]

  return (
    <div className='mainhome'>
      <Carousel className='carosel'>
        {photos.map((r) => {
          return (
            <Carousel.Item key={r.id}>
              <img
                className="d-block w-100"
                height="635"
                style={{objectFit:"cover"}}
                src={r.img}
                alt={r.alt}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>

      <div className='Cards'>
        <Container>
          <Row>
            { Cards.map((c) => {
              return (
              <Col xs={6} md={4} lg={4} sm={6} className='card1' key={c.id}>
                <Card id='card'>
                  <Card.Img variant="top" src={c.img} style={{objectFit:"cover", height:"18rem"}} />
                    <Card.Body>
                      <Card.Title>{}</Card.Title>
                        <Card.Text className='cardtext'>{c.dsc1}</Card.Text>
                    </Card.Body>
                </Card>
              </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
