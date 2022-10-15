import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'password') {
      setPassword(e.target.value)
    } else if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'firstname') {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
