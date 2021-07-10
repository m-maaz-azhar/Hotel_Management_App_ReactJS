import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container ,Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { signupUser } from '../store/actions';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const history = useHistory();

    const signup_user = () => {
        let user = {
            username,
            email,
            password
        }
        dispatch(signupUser(user,history))
    }
    return (
        <div>
            <NavBar />
            <Container className="text-center border p-3 my-5">
                <h2 className="text-white bg-success p-3">SIGN UP</h2>
                <br />
                <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>FULL NAME</Form.Label>
                        <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="text-center" placeholder="Please Enter Your Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control type="email"  onChange={(e) => setEmail(e.target.value)} value={email} className="text-center" placeholder="Please Enter Your Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="text-center" placeholder="Please Enter Your Password" />
                    </Form.Group>
                    <Button onClick={signup_user} variant="success" type="button">
                        SIGN UP
                    </Button>
                </Form>
            </Container>
            <Footer />
        </div>
    )
}

export default SignUp
