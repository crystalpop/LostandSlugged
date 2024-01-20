import React from 'react'
import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'
// import {Button } from 'react-bootstrap'

export default function Dashboard() {
  return (
    <>
      <h2 className =  "text-center mb-4">Home</h2>
      <Link to = '/signup'>
        <Button variant = "link">signup</Button>
      </Link>
      <Link to = '/login'>
        <Button variant = "link">login</Button>
      </Link>
    </>
  )
  
}
