import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import './Registration.css';
import Roles from './Roles';
import CustomModal from '../common/CustomModal';
import Button from 'react-bootstrap/Button';


const Registration = () => {


    const initialValues = {
        userName: '', password: '', confirmPassword: '', mobileNo: '', email: '',
        roles: []
    };

    // const [roleOptions, setRoleOptions] = useState(['admin', 'user']);
    // const [roles, setRoles] = useState([]);

    const [isLoading, setLoading] = useState(false);
    const [isModalOpen, openModal] = useState(false);


    // const getRoles = () => {

    //     axios.get("http://localhost:8095/roles").then(response => {
    //         let rolesTempArr = [];
    //         let filterdRoles = [];
    //         let fetchedRoles = response.data;
    //         fetchedRoles.map(roleItr => {
    //             let role = {};
    //             role.key = roleItr.name;
    //             role.value = roleItr.id;
    //             rolesTempArr.push(role);
    //         });
    //         filterdRoles = fetchedRoles.map(role => {
    //             return { id: role.id };
    //         })
    //         setRoles(filterdRoles);
    //         setRoleOptions(rolesTempArr);
    //     })

    // }


    useEffect(() => {
        //  getRoles();
        // openModal(true);
    }, [isModalOpen])

    const validationSchema = Yup.object({
        // 'userName': Yup.string().required('Name can not be empty'),
        'password': Yup.string().required('Password can not be empty'),
        'confirmPassword': Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Required'),
        'mobileNo': Yup.string().required('Mobile No can not be empty'),
        // 'email': Yup.string().email('Invalid Email Format').required('Email can not be empty'),
        "roles": Yup.array().required('Required')
    });
    const onSubmit = (formValues, onSubmitProps) => {
        let user = { ...formValues };
        delete user.confirmPassword;
        delete user.roles;
        // let selectedRoles = formValues.roles.map(roleId => {
        //     console.log(roles);
        //     return roles.find(role => role.id == roleId);
        // })
        //user.roles = selectedRoles;


        onSubmitProps.resetForm();
        setLoading(true);
        // showLoader()
        // <ToastMsg msg="" />
        //initialValues.roles = []
        //getRoles();

        axios.post("http://localhost:8095/registration", user)
            .then(res => {
                console.log(res);
                setLoading(false)
                // hideLoader();
                toast("Login Successfull");
                onSubmitProps.resetForm();
                initialValues.roles = []
                //getRoles();
                //setRoleOptions([]);
            })

        console.log(user);
    }

    return (<Formik enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {
            (formik) =>
                <div className="col-md-4">
                    <CustomModal render={() => <Roles></Roles>} modalHeader={"Add Role"} showModal={isModalOpen}>

                    </CustomModal>
                    {!isLoading && <Form>
                        <FormikControl control="input" type="text" name="userName" label="User Name" />
                        <FormikControl control="input" type="password" name="password" label="Password" />
                        <FormikControl control="input" type="password" name="confirmPassword" label="Confirm Password" />
                        <FormikControl control="input" type="text" name="email" label="Email" />
                        <FormikControl control="input" type="text" name="mobileNo" label="Mobile No" />
                        {/* <FormikControl control="checkbox" name="roles"
                            label="Roles" options={roleOptions}
                        /> */}

                    


                        <Button variant="primary" onClick={() => openModal(true)}>Add Role</Button> 

                        <button type="submit"
                            disabled={!(formik.dirty && formik.isValid)}
                            className="btn btn-lg btn-primary" >Submit</button>
                        <ToastContainer />
                    </Form>}
                    {isLoading && <Spinner className="loader" animation="border" variant="primary" />}
                </div>
        }

    </Formik>);

}

export default Registration;
