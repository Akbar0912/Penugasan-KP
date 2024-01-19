import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayout title="Quora" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
