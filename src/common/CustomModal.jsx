import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import FormikControl from '../formik-element/FormikControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CustomModal = (props) => {

    const initialValues = {
        role: ''
    };


    // const [showL, setShow] = useState(props.showModal);
    
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // useEffect(() => {
    //     setShow(props.showModal)
    // }, [props.showModal])

    const validationSchema = Yup.object({
        'role': Yup.string().required('Role can not be empty'),
    });

    return (
        <>

            <Modal show={props.showModal} onHide={props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.render()
                    }
                </Modal.Body>
            </Modal>

        </>
    );

};

export default CustomModal;