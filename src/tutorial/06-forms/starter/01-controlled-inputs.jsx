const ControlledInputs = () => {
  return (
    <form className='form'>
      <h4>Controlled input</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input type='text' id='name' className='form-input' />
      </div>

      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' name='' id='email' className='form-input' />
      </div>

      <div className='form-row'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input type='password' name='' id='password' className='form-input' />
      </div>

      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
