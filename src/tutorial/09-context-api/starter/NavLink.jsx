import React from 'react';
import UserContainer from './UserContainer';

const NavLink = ({ user, logout, login }) => {
  return (
    <div>
      <h1>NavLink</h1>
      <UserContainer user={user} logout={logout} login={login} />
    </div>
  );
};

export default NavLink;
