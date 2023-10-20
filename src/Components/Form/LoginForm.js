
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  // Define state variables for form input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  // Define state variables to track validation status
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset validation errors
    setUsernameError('');
    setPasswordError('');
    setMobileError('');

    // Perform validation
    let isValid = true;

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!mobile) {
      setMobileError('Mobile number is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Redirect to another page after form submission (e.g., '/form')
    navigate('/form');
  };

  return (
    <div className="container text-center mt-5">
      <div className=" " style={{ maxWidth: '600px', marginLeft: '200px' }}>
        {/* <h1 className="text-success" style={{ marginTop: '50px' , marginRight:'200px'}}>Login</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputUserName" className="col-sm-2 col-form-label">
              UserName:
            </label>
            <div className="col-sm-5">
              <input
                type="username"
                className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                id="inputUserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="invalid-feedback">{usernameError}</div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password :
            </label>
            <div className="col-sm-5">
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">{passwordError}</div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">
              Mobile :
            </label>
            <div className="col-sm-5">
              <input
                type="number"
                className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                id="inputNumber"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <div className="invalid-feedback">{mobileError}</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1"></label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginRight:'100px'}}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
