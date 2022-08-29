import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import CustomModal from '../common/CustomModal';
import Roles from './Roles';
import { Button } from 'react-bootstrap';

const addProduct = () => {
    const initialValues = {
        name: '', price: ''
    };

    const [isModalOpen, openModal] = useState(false);

    const hideModal = () => {
        openModal(false);
    }

    useEffect(() => {

    }, [])

    const showModal = () => {
        openModal(true);
    }

    const dropdownOptions = [
        { key: "Select an Category", value: '' },
        { key: "Food", value: 'food' },
        { key: "Clothes", value: 'clothes' }
    ];


    const validationSchema = Yup.object({
        'name': Yup.string().required('Name can not be empty'), 'price': Yup.string().required('Price can not be empty'),
    });
    return (
        <>

            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}>
                <Form className="col-md-4">
                    <CustomModal render={() => <Roles></Roles>}
                        modalHeader="Add Category" showModal={isModalOpen}
                        hideModal={hideModal}>
                    </CustomModal>

                    <FormikControl control="input" type="text" name="name" label="Name" />
                    <FormikControl control="input" type="text" name="price" label="Price" />
                    <FormikControl control="select" name="selectOption" label="Select a Category" options={dropdownOptions} />

                    <Button variant="primary" onClick={showModal}>Add Category</Button>

                    <button type="submit"
                        className="btn btn-lg btn-primary" >Submit</button>
                </Form>
            </Formik>


        </>
    );
};

export default addProduct;