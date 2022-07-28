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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validationSchema = Yup.object({
        'role': Yup.string().required('Role can not be empty'),
    });

    return (
        <>
            <Formik enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormikControl control="input" type="text" name="role" label="Role" />
                        </Form>
                    </Modal.Body>
                </Modal>
            </Formik>
        </>
    );

};

export default Roles;