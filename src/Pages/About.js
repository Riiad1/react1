import React, { useState, useEffect} from 'react'
import '../Components/About.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Video from '../Video/aboutvid.mp4'
import Videogg from '../Video/aboutvid.ogg'
import Footer from './Footer';



const About = () => {
    const [user, setUser] = useState ([]);
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users?page=2');
            const data = await response.json();
            setUser(data.data);
            
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => { 
        fetchUsers();
    }, [])

    const VideoPlay = () => {
        return(
          <div className='video-container'>
            <video controls autoPlay loop muted>
              <source src={Video}/>
              <source src={Videogg}/>
              Your browser does not support the video tag.
            </video>
          </div>
        )
      }

  return (
    <div className='about'>
        <VideoPlay/>
        <Container>
            <Row>
                {
                    user && user.map((u) => {
                        return (
                        <Col key={u.id} sm={12} md={6} lg={4}>
                            <Card className='Cardbody'>
                                <Card.Img variant="top" src={u.avatar} className='cardimg' />
                                <Card.Body>
                                    <Card.Title className='title'>{u.first_name} {u.last_name}</Card.Title>
                                    <Card.Text className='cardtext'>
                                        {u.email}
                                    </Card.Text>
                                    <Link to={`/user/${u.id}`}>
                                        <Button className='buton' >Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                        
                    })
                }
            </Row>
        </Container>

        <Footer/>
    </div>
  )
}

export default About