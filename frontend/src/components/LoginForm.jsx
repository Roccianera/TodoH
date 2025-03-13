import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { login } from '../service/authService';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

function LoginForm() {
  /*
  const navigate = useNavigate(); // Call useNavigate at the top level
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard'); // Use the navigate from outside the effect
    }
  }, [navigate]); // Add navigate as a dependency

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(username, password);
      setLoading(false);
      setError('');
      alert('Logged in successfully');
      navigate('/dashboard'); // Use the navigate from outside the handler
    } catch (er) {
      setLoading(false);
      setError("Bad Credentials");
      alert('Bad Credentials');
    }
  };

  */

  const navigate = useNavigate(); // Call useNavigate at the top level
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = useSignIn();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('username', username);
    setError('');
    setLoading(true);

    try {
      const response = await login(username, password);
      const sign = signIn({
        auth: {
          token: response.data.token,
          type: 'Bearer',
        },
        expiresIn: 36000,
        tokenType: 'Bearer',
        userState: { username: username },
      });
      console.log('Sign in successful');
      navigate('/dashboard'); // Navigate to dashboard after successful login

      setLoading(false); // Reset loading state on success
    } catch (err) {
      console.error('Login error:', err);
      setError('Bad Credentials');
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <form className="form">
        <div className="title">
          Welcome,
          <br />
          <span>sign up to continue</span>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-confirm" onClick={handleLogin}>
          Let`s go →
        </button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    padding: 20px;
    background: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    width: 300px;
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 25px;
  }

  .title span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 17px;
  }

  .input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }

  .login-with {
    display: flex;
    gap: 20px;
  }

  .button-log {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    color: var(--font-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: var(--main-color);
  }

  .button-log:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .button-confirm {
    margin: 50px auto 0 auto;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default LoginForm;
