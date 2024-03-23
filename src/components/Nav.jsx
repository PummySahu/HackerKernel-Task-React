import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const Logouthandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className='h-20 w-full absolute flex  items-center px-6 justify-between top-0  text-white  bg-black '>
      <Link to="/"><h1 className='text-2xl'>welcome</h1></Link>
      {isLoggedIn && <button className='bg-red-700 px-5 py-2 rounded-md' onClick={Logouthandler}>Logout</button>}
    </div>
  );
};

export default Nav;
