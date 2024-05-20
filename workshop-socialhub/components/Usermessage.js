import React from 'react'
import { useEffect, useState } from "react";

export default function Usermessage() {
  const [message, setMessage] = useState([]);

  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setMessage(data)
    })
    .catch(error => {
      console.error ('เกิดข้อผิดพลาด : ', error)
    })
  }, [])

  return (
    <div className='user'>
      {message.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h5>{"@"+user.username}</h5>
          <p>{user.company.bs}</p>
        </div>
      ))}
    </div>
  )
}
