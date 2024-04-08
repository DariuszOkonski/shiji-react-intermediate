import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert((prevState) => !prevState);
  };

  return (
    <div>
      <button className='btn' onClick={toggleAlert}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <h2 className='alert alert-danger'>hello world</h2>;
};

export default ToggleChallenge;
