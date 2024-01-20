import React, {useRef, useState} from 'react'
import {Button, Form, Card, Alert} from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import background from "./assets/homepage_background.png";


export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()

  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    //console.log(error)
    //prevent refresh
    e.preventDefault()

    // try to create account
    try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value )
        navigate('../map')
        //alert('Login Successful')
    } catch {
        setError('Failed to login')
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
        <h2 className='text-center mb-4'>Login</h2>
        <div className="d-flex align-items-center justify-content-center">
            <Card className='w-50'>
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
                        
                        <Button disabled={loading} className="w-100" type="submit" >
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            <div className='w-100 text-center mt-2'>
                Don't have an account?  <Link to = '/signup'>Sign Up</Link>
            </div>
            
        </div>
    </div>

  )
}