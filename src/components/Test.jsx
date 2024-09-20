import React from 'react'
import { useEffect, useState } from 'react'

const Test = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        // call the server or make request to route /
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setMessage(res.message)
            })
    }, [])

  return (
    <div>Test {message}</div>
  )
}

export default Test