import * as yup from 'yup';

const passRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/

export const userSchema = yup.object().shape({
    name: yup.string().required("Required"),
    lname: yup.string().required("Required"),
    email: yup.string().email("Please Enter a valid Email").required("Required"),
    pass: yup.string().min(6).matches(passRules).required("required"),
    confirm: yup.string().oneOf([yup.ref("pass"), null]).required("Required"),
});


export const contactSchema = yup.object().shape({
    Fname: yup.string().required("Required"),
    Lname: yup.string().required("Required"),
    Email: yup.string().email("Please Enter a Valid Email").required("Required"),
    Birth: yup.date().required("Required")
})
