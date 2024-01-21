import React, {useRef, useState} from 'react'
import {Button, Form, Card, Alert} from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import {Link, useNavigate } from 'react-router-dom'
import background from "./assets/homepage_background.png";
import Text from 'react-text';




export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    //console.log(error)
    //prevent refresh
    e.preventDefault()

    // checks if passwords match
    if( passwordRef.current.value !== confirmPasswordRef.current.value){
        return setError('Passwords do not match')
    }

    // try to create account
    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value )
        navigate("../map")
    } catch {
        setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
        
        <div style ={{ backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '100vh',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center'

        }}>
            
            <h1 className='text-center mb-4'>Sign Up</h1>
                

            <div className="d-flex align-items-center justify-content-center">
            
                
                <Card className = 'w-50'>
                    <Card.Body>
                        
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group id = 'email'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type = 'email' ref = {emailRef} required/>
                            </Form.Group>
                            <Form.Group id = 'password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type = 'password' ref = {passwordRef} required/>
                            </Form.Group>
                            <Form.Group id = 'confirm-password'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type = 'confirm-password' ref = {confirmPasswordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
                <div className='w-100 text-center mt-2'>
                    Already have an account?  <Link to = '/login'>Log in</Link>
                </div>
        </div>
    </div>
        
    

  )
}