import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => currentState + 1);
    }, 3000);
  };

  return (
    <div>
      <h3>Counter: {value}</h3>
      <button type='button' className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
