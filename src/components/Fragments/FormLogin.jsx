import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  const handleLogin = (event) => { //parameter event digunakan untuk menghandle event button tanpa melakukan refresh
    event.preventDefault(); // menampilkan banyaknya aktifitas terhadap button
    localStorage.setItem('email', event.target.email.value); //penyimpanan dalam local storage
    localStorage.setItem('password',event.target.password.value); 
    window.location.href = "/product"; // me-ridirect ke halaman product
    // console.log(event.target.email.value); 
    // console.log(event.target.password.value); 
    console.log("login");
  }; //handleLogin at Parent Components

  return (
    <form onSubmit={handleLogin}>  {/* Konsep Login Handler */}
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
      />
      <Button color="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
