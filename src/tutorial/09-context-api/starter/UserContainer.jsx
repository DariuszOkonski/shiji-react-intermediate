import React from 'react';

const UserContainer = ({ user, logout, login }) => {
  if (!user) {
    return (
      <div>
        <h1>User logged out</h1>
        <h2>please log in</h2>
        <button className='btn' onClick={login}>
          login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>UserContainer</h1>
      <h2>User Name: {user.name}</h2>
      <button className='btn' onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserContainer;
