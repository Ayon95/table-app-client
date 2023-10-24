import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <main className="min-height-screen center">
      <div>
        <h1>Log in to your account</h1>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
