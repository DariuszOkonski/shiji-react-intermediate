import React, { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });

  const logout = () => setUser(null);
  const login = () => setUser({ name: 'rambo' });

  return (
    <div className='navbar'>
      <h5>Context API</h5>
      <NavLink user={user} logout={logout} login={login} />
    </div>
  );
};

export default Navbar;
