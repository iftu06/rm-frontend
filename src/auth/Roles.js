import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Roles = () => {

    const initialValues = {
        role: ''
    };

    const validationSchema = Yup.object({
        'role': Yup.string().required('Role can not be empty'),
    });

    return (
        <>

            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}>
                {
                    <Form>
                        <FormikControl control="input" type="text" name="role" label="Role" />
                    </Form>
                }
            </Formik>


        </>
    );

};

export default Roles;