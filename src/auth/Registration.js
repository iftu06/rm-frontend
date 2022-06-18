import React, { useEffect, useState } from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import  axios  from 'axios';
import ToastMsg from '../common/toastmsg';

const Registration = () => {

    const initialValues = {userName : '',password:'',confirmPassword:'',mobileNo:'',email : '',
                            roles:[]};

    const [roleOptions,setRoleOptions] = useState([]);
    const [roles,setRoles] = useState([]);

    const getRoles = () => {

        axios.get("http://localhost:8095/roles").then( response => {
            let rolesTempArr = [];
            let filterdRoles = [];
            let fetchedRoles = response.data;
            fetchedRoles.map(roleItr => {
                let role = {};
                role.key = roleItr.name;
                role.value = roleItr.id;
                rolesTempArr.push(role);
            });
            filterdRoles = fetchedRoles.map( role => {
                return {id : role.id};
            })
            setRoles(filterdRoles);
            setRoleOptions(rolesTempArr);
        })

    }

    
    useEffect( () => {
        getRoles();
    },[])
  
    const validationSchema = Yup.object({
        'userName' : Yup.string().required('Name can not be empty'),
        'password' : Yup.string().required('Password can not be empty'),
        'confirmPassword' : Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required('Required'),
        'mobileNo' : Yup.string().required('Mobile No can not be empty'),
        'email' : Yup.string().email('Invalid Email Format').required('Email can not be empty'),
        "roles" : Yup.array().required('Required')
    });
    const onSubmit = (formValues,onSubmitProps) => {
        let user = {...formValues};
        let selectedRoles = formValues.roles.map( roleId => {
            console.log(roles);
            return roles.find( role => role.id == roleId);
        })
        user.roles = selectedRoles;

        onSubmitProps.resetForm();
        // <ToastMsg msg="" />
        //initialValues.roles = []
        getRoles();

        axios.post("http://localhost:8095/registration",user)
                .then( res => {
                    console.log(res);
                    onSubmitProps.resetForm();
                    initialValues.roles = []
                    getRoles();
                    //setRoleOptions([]);
                })

        console.log(user);
    }

    return (<Formik enableReinitialize 
                    initialValues={initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit}>
        {
            (formik) => 
            <div className="col-md-4">
                <Form>
                    <FormikControl control="input" type="text" name="userName" label="User Name"/>
                    <FormikControl control="input" type="password" name="password" label="Password"/>
                    <FormikControl control="input" type="password" name="confirmPassword" label="Confirm Password"/>
                    <FormikControl control="input" type="text" name="email" label="Email"/>
                    <FormikControl control="input" type="text" name="mobileNo" label="Mobile No"/>
                    <FormikControl control="checkbox"  name="roles" 
                        label="Roles" options={roleOptions}/>
                    {/* <FormikControl control="date"  name="birthDate" 
                        label="Pick a date"/> */}
                    <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                </Form>
            </div>
        }
    </Formik>  );
}
 
export default Registration;
