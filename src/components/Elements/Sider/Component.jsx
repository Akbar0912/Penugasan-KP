/* eslint-disable react/prop-types */
const Component = (props) => {
  const {
    imageSrc = null,
    icon = null, 
    title,
  } = props;

  return (
    <div className="p-2 mt-1 flex items-center">
      {icon}
      <img src={imageSrc} className="rounded-sm w-5"></img>
      <h1 className="text-gray-500 text-sm ml-3">{title}</h1>
    </div>
  );
};

export default Component;
