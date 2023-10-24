import { useState } from 'react';
import useLogin from './hooks/useLogin';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const loginMutation = useLogin();

  function handleChangeInput(e) {
    setFormData(currentValue => ({ ...currentValue, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginMutation.mutate(formData);
  }

  return (
    <form aria-labelledby="loginFormLabel" onSubmit={handleSubmit}>
      <span id="loginFormLabel" className="sr-only">
        Log in
      </span>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChangeInput}
          placeholder="test@example.com"
          required
          disabled={loginMutation.isPending}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChangeInput}
          required
          disabled={loginMutation.isPending}
        />
      </div>
      <button className="btn" type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? 'Loading' : 'Login'}
      </button>
      {!loginMutation.isPending && loginMutation.isError && (
        <p className="error" role="alert">
          {loginMutation.error.message}
        </p>
      )}
    </form>
  );
}

export default LoginForm;
