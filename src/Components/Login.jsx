import AppBars from "./AppBars";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <header>
        <AppBars btnText="Register" />
      </header>
      <LoginForm />
    </>
  );
};

export default Login;
