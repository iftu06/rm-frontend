import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
const Category = () => {
    const initialValues = {
        category: ''
    };


    const validationSchema = Yup.object({
        'category': Yup.string().required('Category can not be empty'),
    });
    return (
        <>

            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}>
                <Form className="col-md-4">
                    <FormikControl control="input" type="text" name="category" label="Category" />
                    <button type="submit"
                        className="btn btn-lg btn-primary" >Submit</button>
                </Form>
            </Formik>


        </>
    );
};

export default Category;