/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use client';

import { Tooltip } from 'flowbite-react';

const IconButton = (props) => {
  const {
    icon, 
    tooltipContent,
  } = props;

  return (
    <div className="text-center text-gray-700 hover:text-red-700 transition relative">
      <Tooltip content={tooltipContent} placement="bottom" className="bg-white text-black" arrow={false}>
        <div className='bg-white text-gray-400 text-2xl outline-white active:text-red-800 transition-600 hover:text-gray-300 ' color='gray'>{icon}</div>
      </Tooltip>
    </div>
  );
}

export default IconButton;


