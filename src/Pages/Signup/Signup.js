import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Component/firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../../Component/SocialLogin';
import { updateProfile } from 'firebase/auth';
import Spinner from '../../Component/Spinner';
import './signup.css'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const [sendEmailVerification, sending, verifyerror] = useSendEmailVerification(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookerror,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


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
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleconfirmPass = (e) => {

    if (e.target.value === password) {
      setConfirm(e.target.value)
      setError('')
    }
    else {
      setError("password's don't match")
    }

    setConfirm(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(email, confirm)
    await updateProfile({ displayName: name });
    navigate('/')
    console.log(user);
  }

  useEffect(() => {
    if (hookerror) {
      toast(hookerror.message)
    }
  }, [hookerror])
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from)
  }
  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className=''>
      <div className='d-flex justify-content-center align-items-center pt-5'> <form onSubmit={handleSubmit}>
        <h3 className='fw-bold text-primary' >Sign Up Now </h3>
        <div className="mb-3">
          <label for="name" className="form-label">Full Name</label>
          <input type="text" onChange={handleName} className="form-control" id="name" required /></div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={handlePass} className="form-control" id="exampleInputPassword1" required />
          <div className='mt-3'>
            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input type="password" onChange={handleconfirmPass} className="form-control" id="exampleInputPassword1" required />
          </div>
        </div>


        {
          error && <p className='text-danger '>{error}</p>}
        <ToastContainer></ToastContainer>

        <button type="submit" className="btn btn-primary w-100">Sign Up </button>
      </form>
      </div>
      <div className='d-flex justify-content-center align-items-center'><hr className='me-2' />or <hr className='ms-2' /></div>
      <div className='d-flex justify-content-center'><SocialLogin></SocialLogin></div>
    </div>

  );
};

export default Signup;