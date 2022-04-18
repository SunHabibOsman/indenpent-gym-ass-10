import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import auth from '../firebase.init';
import './Header.css'
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="container-fluid">
          <Link to={'/'}>
            <img src="logo.png" height="50" alt="CoolBrand" />
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
            </div>
            <div className="navbar-nav ms-auto ">
              <div className='mx-4'><CustomLink to={'/Home'}>Home</CustomLink></div>
              <div className='mx-4'><CustomLink to={'/blog'}>Blog</CustomLink></div>
              <div className='mx-4'><CustomLink to={'/aboutme'}>About Me</CustomLink></div>
              {
                user ? <p style={{ cursor: 'pointer' }} onClick={logout} className='text-primary' >Sign Out</p> : <div className='d-flex gap-4'><CustomLink to={'/login'}>Log in </CustomLink><CustomLink to={'/signup'}>Sign Up</CustomLink></div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;