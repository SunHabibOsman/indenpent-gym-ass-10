import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
  const navigate = useNavigate()
  let errohandle
  if (error || giterror) {

    toast(error?.message)
    toast(giterror?.message)
  }
  if (loading || gitloading) {
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
  if (user || gituser) {
    navigate('/home')
  }


  return (
    <div>
      <button onClick={() => signInWithGoogle()} className="btn btn-primary w-100 mt-4">Sign Up with Google </button>
      <button onClick={() => signInWithGithub()} className="btn btn-dark w-100 mt-3">Sign Up With Github</button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SocialLogin;