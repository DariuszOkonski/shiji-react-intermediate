import { useState, useEffect, useCallback, useMemo } from 'react';
import slowFunction from '../../11-performance/starter/03-hooks/slowFunction';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const value = useMemo(() => slowFunction(), []);

  console.log(value);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
