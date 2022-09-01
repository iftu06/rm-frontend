import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Category from './category';
import Roles from './Roles';

const Modalform = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {/* <Button variant="primary" onClick={() => setShow(true)}>
                Add Roles
            </Button> */}

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        <Roles></Roles>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Modalform;