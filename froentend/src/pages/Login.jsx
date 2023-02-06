import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const { email, password} = formData

    const onchange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
            
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
      <section className="heading">
        <h1>
            <FaSignInAlt/> Login
        </h1>
        <p>Login and start setting Goals</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
            {/* <div className="form-group">
            <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your name' onChange={onchange}/>
            </div> */}
            <div className="form-group">
            <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onchange}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onchange}/>
            </div>
            {/* <div className="form-group">
            <input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onchange}/>
            </div> */}
            <div className="form-group">
                <button type='submit' className='btn btn-block'>Submit</button>
            </div>
        </form>
      </section>
    </>
  )
}

export default Login