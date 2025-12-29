import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const FormData = () => {

    return (
        <>
         <Container>
               <Form>
                <h1>STUDENTS DATA SUBMIT</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>GR ID</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CONTACT NUMBER</Form.Label>
                    <Form.Control type="number" placeholder="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>COURSE NAME</Form.Label>
                    <Form.Control type="number" placeholder="course name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ADDRESS</Form.Label>
                    <Form.Control type="password" placeholder="address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         </Container>
        </>
    )
}

export default FormData;