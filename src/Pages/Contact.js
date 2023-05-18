import React from 'react'
import '../Components/Contact.scss'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from 'formik';
import { contactSchema } from '../Components/Validation';
import { useNavigate } from 'react-router';
import Footer from './Footer';
export const Contact = () => {


const navigate = useNavigate();
const [verified, setVerified] = useState(false);
function onChange(value) {
    console.log("Captcha value", value)
    setVerified(true);
}
  const onSubmit = async (values, action) => {
    console.log(values);
    console.log(action);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();

    navigate('/succes')

  };

  const {values, errors, isSubmitting, handleBlur, handleSubmit, handleChange} = useFormik({
    initialValues: {
      Fname:'',
      Lname:'',
      Email:'',
      Birth:''
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className='contact'>
      <form method='POST' autoComplete='off' className='contactform' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Us</legend>
          <div className="row">
            <div className="inputbox">
              <input
              required
               name='Fname'
               id='Fname'
               type="text"
               value={values.Fname}
               onChange={handleChange}
               onBlur={handleBlur}
               />

              <label htmlFor='Fname'>First Name</label>
              <i></i>
            </div>
            <div className="inputbox">
              <input  
              required
               name='Lname'
               id='Lname'
               type="text"
               value={values.Lname}
               onChange={handleChange}
               onBlur={handleBlur}
               />
              <label htmlFor='Lname'>Last Name</label>
              <i></i>
            </div>
          </div>
          <div className="row">
            <div className="inputbox">
              <input
              required
               name='Email'
               id='Email'
               type="email"
               value={values.Email}
               onChange={handleChange}
               onBlur={handleBlur}
               />
              <label htmlFor='Email'>Email Address</label>
              <i></i>
            </div>
            <div className="inputbox">
              <input 
              required
               name='Birth'
               id='Birth'
               type="date"
               value={values.Birth}
               onChange={handleChange}
               onBlur={handleBlur}
               />
              <label htmlFor='Birth'>Birth Date</label>
              <i></i>
            </div>
          </div>
          <div className="row">
            <div className="inputbox">
              <textarea cols={60} rows={3} placeholder='YOUR MESSAGE'/>
            </div>
            </div>
            <div className='row'>
                <div className="inputbox">
                <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
                /><br/>
              <button type='submit' 
              className='hover' 
              disabled={isSubmitting || !verified}
              >SEND</button>
            </div>
          </div>
        </fieldset>
      </form>

      <Footer/>
    </div>
  )
}
