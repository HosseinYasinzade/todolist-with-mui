import AppBars from "./AppBars";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <header>
        <AppBars btnText="Login" />
      </header>
      <RegisterForm />
    </>
  );
};

export default Register;
