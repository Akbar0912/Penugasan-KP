/* eslint-disable react/prop-types */
const Button = (props) => {
  //mencegah duplicate button
  const { 
    children, 
    color,  
    onClick = () => {}, // Default Function Kosong
    type="button",
  } = props; //konsep "distructering"

  return (
    <button
      className={`h-8 px-2 font-semibold rounded-full ${color} text-white`}
      type={type}
      onClick={() => onClick()} // Button Handler Login
    >
      {children}
    </button>
  );
}; //Konsep Components dan Props di React (Manual)

export default Button;
