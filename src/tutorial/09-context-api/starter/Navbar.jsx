import React, { useState, createContext, useContext } from 'react';
import NavLink from './NavLink';

export const NavbarContext = createContext();

export const useAppContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('You are using NavbarContext out of provider');
  }

  return context;
};

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => setUser(null);
  const login = () => setUser({ name: 'rambo' });

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <div className='navbar'>
        <h5>Context API</h5>
        <NavLink />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
