import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function FormExample() {
    const [validated, setValidated] = useState(false);
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        
        const item = { fname, lname, email, password };
        try {
            const response = await axios.post("http://localhost:3002/register", item);
            setSuccessMessage("Registration successful!");
            setErrorMessage(''); // Clear any previous error messages
            // You can redirect or clear the form here if needed
        } catch (error) {
            setErrorMessage('An error occurred during registration. Please try again.');
            setSuccessMessage('');
        }

        setValidated(true);
    };

    return (
        <>
            <title>Dhisha Bank | Signup Page</title>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginTop: '6%', marginLeft: '30%', width: '40%' }} className='card-outer-cash'>
                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustom01">
                        <Form.Label style={{ color: "blue" }}>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustom02">
                        <Form.Label style={{color:"blue"}}>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            onChange={(e) => setLname(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustomUsername">
                        <Form.Label style={{color:"blue"}}>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter a valid Email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="13" controlId="validationCustom03">
                        <Form.Label style={{color:"blue"}}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid" >
                            Please Enter a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Signup</Button>
                
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
            </Form>
        </>
    );
}

export default FormExample;
