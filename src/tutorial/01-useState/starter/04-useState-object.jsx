import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Mark',
    age: 40,
    hobby: 'video games',
  });

  const displayPerson = () => {
    setPerson((prevState) => ({
      ...prevState,
      name: 'John',
      age: 34,
      hobby: 'fishing',
    }));
  };

  return (
    <div>
      <h2>useState object example</h2>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Hobby: {person.hobby}</h3>
      <button type='button' className='btn' onClick={displayPerson}>
        update
      </button>
    </div>
  );
};

export default UseStateObject;
