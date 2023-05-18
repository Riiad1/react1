import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../Components/Login.scss';
import { userSchema } from '../Components/Validation';
import Logo from '../icons/naturalbardhlogo.png'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Pht1 from '../Media/food.1.jpg'
import Pht2 from '../Media/food.3.jpg'
import Pht3 from '../Media/food.9.jpg'
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, action) => {
    console.log(values);
    console.log(action);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();

    navigate('/home');
  };

  const { values, errors, isSubmitting, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      lname: '',
      email: '',
      pass: '',
    },
    validationSchema: userSchema,
    onSubmit,
  });

  console.log(errors);

  const images =[
  {
    id:1,
    img: Pht3
  },
  {
    id:2,
    img: Pht2
  },
  {
    id:3,
    img: Pht1
  }
]

  return (
    <>
    <div className='main'></div>
      <div className='header'>
        <img src={Logo} style={{textAlign:"center"}} alt='logo' />
      </div>
      <Container>
      <Row>
        <Col xs={12} md={6} lg={6} xl={6}>
      <form autoComplete='on' onSubmit={handleSubmit} className='loginform'>
        <h1>Register</h1>
        <label htmlFor='name'>First Name</label>
        <br />
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter Your Name..'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor='lname'>Last Name</label>
        <br />
        <input
          type='text'
          id='lname'
          name='lname'
          placeholder='Enter Your LastName'
          value={values.lname}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor='email'>Email Address</label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          placeholder='youremail@gmail.com'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor='pass'>Password</label>
        <br />
        <input
          type='password'
          id='pass'
          name='pass'
          placeholder='*********'
          value={values.pass}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor='confirm'>Confirm Password</label>
        <br />
        <input
          type='password'
          id='confirm'
          name='confirm'
          placeholder='Confirm Your Password'
          value={values.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        <button disabled={isSubmitting} type='submit'>Send Data</button>
      </form>
        </Col>
        <Col xs={6} md={6} lg={6} xl={6} className='carousel-container'>
          <Carousel className='carousel'>
            {
              images.map((i) => {
                return(
                  <Carousel.Item key={i.id}>
                    <img
                    className='d-block w-100'
                    src={i.img}
                    alt='First slide'
                    style={{height:"600px", objectFit:"cover"}}
                    />
                  </Carousel.Item>
                )})
            }
          </Carousel>
        </Col>
      </Row>
      </Container>
      
      <Footer/>

      
    </>
  );
};

export default Login;
