import React, { useEffect, useState } from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import  axios  from 'axios';
import  { Redirect } from 'react-router-dom'


const Login = (props) => {

  const initialValues = {email : '',password:''};
  console.log(props);


  const validationSchema = Yup.object({
    'email' : Yup.string().email('Invalid Email Format').required('Email can not be empty'),
    'password' : Yup.string().required('Password can not be empty')    
  });

  const onSubmit = (formValues,onSubmitProps) => {
    let user = {...formValues};
    
    axios.post("http://localhost:8095/login",user)
            .then( res => {
                console.log(res);
                let token = res.data.token;
                
                onSubmitProps.resetForm();
                if(token){
                  console.log("congrats");
                  localStorage.setItem("token",res.data.token);
                  props.handleLogin();
                  props.history.push("/home");
                }
               
            })

    onSubmitProps.resetForm();

}

  return (<Formik enableReinitialize 
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
{
(formik) => 
<div className="col-md-4">
<Form>
    <FormikControl control="input" type="text" name="email" label="Email"/>
    <FormikControl control="input" type="password" name="password" label="Password"/>
    <button type="submit" className="btn btn-lg btn-primary">Submit</button>
</Form>
</div>
}
</Formik>  );



}

export default Login;
