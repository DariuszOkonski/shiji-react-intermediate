import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'john' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            log out
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className='btn' onClick={login}>
            log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
