import React, { Fragment } from "react";
import { TbCircleLetterM } from "react-icons/tb";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import Icon from "./icon";

const InputAsk = () => {
  return (
    <div className=" bg-white shadow-lg rounded-lg h-20 mx-4 px-4 mt-4 mb-4 md:mx-auto max-w-md md:max-w-xl ">
      <div className="flex items-center pt-2 mb-2">
        <TbCircleLetterM className="text-4xl text-purple-500 "/>
        <input
              type="text"
              className="w-full h-8 ml-2 text-sm rounded-full border-gray-200 focus:outline-none text-black"
              placeholder="Apa yang ingin anda tanyakan atau bagikan"
        ></input>
      </div>
      <div className="flex divide-x gap-4 ml-4">
        <Icon 
          icon={<FaPersonCircleQuestion />}
          title="Tanya"
        />
        <Icon
          icon={<IoCreateOutline />}
          title="Jawab" 
        />
        <Icon
          icon={<MdOutlineCreate />}
          title="Kiriman" 
        />
      </div>
    </div>
  );
};

export default InputAsk;
