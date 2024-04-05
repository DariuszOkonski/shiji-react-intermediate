import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClearList = () => {
    setPeople([]);
  };

  const handleRemoveSingle = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const handleLoadPeople = () => {
    setPeople(data);
  };

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map(({ id, name }) => (
          <li key={id}>
            <span>{name} </span>
            <button type='button' onClick={() => handleRemoveSingle(id)}>
              remove me
            </button>
          </li>
        ))}
      </ul>
      <button className='btn' type='button' onClick={handleClearList}>
        clear list
      </button>
      <button className='btn' type='button' onClick={handleLoadPeople}>
        load people
      </button>
    </div>
  );
};

export default UseStateArray;
