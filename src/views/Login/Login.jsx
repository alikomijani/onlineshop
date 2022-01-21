import React from 'react';

const Login = () => {
  const handleSubmit = ()=>{
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <input type="text" name='username' />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name='password' />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
