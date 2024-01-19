/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <div className="bg-[url('image/bg_login.jpeg')]">
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs bg-white px-4 py-4">
          <h1 className="text-red-800 text-3xl font-bold mb-2">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
          </p>
          {children}
          {/* <Navigation type={type} /> use if else condition */}
          <p className="text-sm mt-5 text-center">
            {type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            {type === "login" && (
              <Link to="/register" className="font-bold text-blue-500">
                {" "}
                Register{" "}
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-blue-500">
                {" "}
                Login{" "}
              </Link>
            )}
          </p>{" "}
          {/* Conditional Rendering Manual*/}
        </div>
      </div>
    </div>
  );
};

// const Navigation = ({type}) => {
//     if (type === 'login') {
//         return (
//             <p className="text-sm mt-5 text-center">
//                 Don`t have an account?
//                 <Link to="/register" className="font-bold text-blue-500"> Register </Link>
//             </p>
//         );
//     } else {
//         return(
//             <p className="text-sm mt-5 text-center">
//                 Already have an account?
//                 <Link to="/login" className="font-bold text-blue-500"> Login </Link>
//             </p>
//         )
//     }
// }; use if else condition

export default AuthLayout;
