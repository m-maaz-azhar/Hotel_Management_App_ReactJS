import React from 'react'
import { Container ,Form, Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/actions';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()
   
    const login = () => {
        let user = {
            email,
            password
        }
        dispatch(loginUser(user,history))
    }

    return (
        <div>
            <NavBar />
            <Container className="text-center border p-3 my-5">
                <h2 className="text-white bg-success p-3">LOGIN</h2>
                <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email}  type="email" className="text-center" placeholder="Please Enter Your Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password}  type="password" className="text-center" placeholder="Please Enter Your Password" />
                    </Form.Group>
                    <Button onClick={login} variant="success" type="button">
                        LOGIN
                    </Button>
                </Form>
            </Container>
            <Footer/>
        </div>
    )
}

export default Login
