import React from 'react';
import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout, login } = useAppContext();

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello there, {user?.name?.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button className='btn' onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
