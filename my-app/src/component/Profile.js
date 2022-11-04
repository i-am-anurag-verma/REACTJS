import React from 'react'
import { useState } from 'react'

const Profile = () => {
  const [state, setState] = useState({name:'Anurag', age:29})

  const updateState = () => {
    try {
      setState({
        name:'Shivansh',
        age: 1.2
      })
    } catch (error) {
      setState(error)
    }
  }
  return (
    <div className='container'>
        <h1>Name {state.name}</h1>
        <h1>Age {state.age}</h1>
        <button onClick={updateState}>Update</button>
    </div>
  )
}

export default Profile