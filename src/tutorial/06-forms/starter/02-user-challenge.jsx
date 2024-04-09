import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('enter some name');
      return;
    }

    setUsers([...users, { id: Date.now(), name }]);
    setName('');
  };

  const handleRemove = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>{' '}
            <button
              type='button'
              className='btn'
              onClick={() => handleRemove(user.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
