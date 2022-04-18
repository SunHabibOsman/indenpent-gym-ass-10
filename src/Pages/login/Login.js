import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Component/firebase.init';
import SocialLogin from '../../Component/SocialLogin';
import Spinner from '../../Component/Spinner';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    hookerror,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  // /\S+@\S+\.\S+/
  const handleEmail = (e) => {

    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value)
    if (validEmail) {
      setEmail(e.target.value)
      setError('')
    }
    else {
      setError('please type correct email ')
    }
  }
  const handlePass = (e) => {
    const passregex = /.{6,}/;
    const validatepass = passregex.test(e.target.value)
    if (validatepass) {
      setPassword(e.target.value)
      setError('')
    }
    else {
      setError('Minimum Six characters')
    }


  }
  useEffect(() => {
    if (hookerror) {
      switch (hookerror?.code) {
        case "auth/invalid-email":
          toast('please provide correct email or valid email')
          break;
        case "auth/invalid-password":
          toast('please provide correct password or valid password')
          break;
        default:
          toast(hookerror.message)
      }
    }
  }, [hookerror])
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)

  }
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from)
  }


  const forgetpass = async () => {
    await sendPasswordResetEmail(email);
    toast('sent email')
  }
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
      <div className='d-flex justify-content-center align-items-center mt-5'>   <form onSubmit={handleSubmit}>
        <h3 className='fw-bold text-primary' >Login Now </h3>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={handlePass} className="form-control" id="exampleInputPassword1" required />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}

        {
          error && <p className='text-danger '>{error}</p>}
        <ToastContainer></ToastContainer>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        <p className='mt-2'> New in Gym BD ?<Link to={'/signup'}> Register Here Now</Link></p>
        <p onClick={forgetpass} style={{ cursor: 'pointer' }} className='text-primary'>Forget Password?</p>
      </form></div>
      <div className='d-flex justify-content-center align-items-center'><hr className='me-2' />or <hr className='ms-2' /></div>
      <div className='d-flex justify-content-center'>
        <SocialLogin></SocialLogin></div>
    </div>
  );
};

export default Login;