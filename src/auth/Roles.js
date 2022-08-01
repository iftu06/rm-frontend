import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';

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
                <Form className="col-md-4">
                    <FormikControl control="input" type="text" name="role" label="Role" />
                    <button type="submit"
                        className="btn btn-lg btn-primary" >Submit</button>
                </Form>
            </Formik>
        </>
    );

};

export default Roles;