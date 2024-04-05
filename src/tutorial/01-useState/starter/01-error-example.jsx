const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>count: {count}</h2>
      <button type='button' onClick={handleClick} className='btn'>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
