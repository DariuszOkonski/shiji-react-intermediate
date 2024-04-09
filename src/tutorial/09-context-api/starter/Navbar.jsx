import React, { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'john' });

  const logout = () => setUser(null);
  const login = () => setUser({ name: 'rambo' });

  return (
    <div>
      <h1>Navbar</h1>
      <NavLink user={user} logout={logout} login={login} />
    </div>
  );
};

export default Navbar;
