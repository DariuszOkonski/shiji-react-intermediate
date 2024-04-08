import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div style={{ height: '200vh' }}>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunction = () => {
      console.log('some function');
    };

    window.addEventListener('scroll', someFunction);

    return () => {
      window.removeEventListener('scroll', someFunction);
    };
  }, []);

  return <h1>Hello there</h1>;
};

export default CleanupFunction;
