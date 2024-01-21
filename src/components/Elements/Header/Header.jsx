import Button from "../Button/Index";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineListAlt } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import IconButton from "./IconButton";
import { TbWorld } from "react-icons/tb";
import { TbCircleLetterM } from "react-icons/tb";

const SearchBar = () => {
  const handleLogout = () => {
    //Konsep Event Handler
    localStorage.removeItem("email"); // Melakukan penghapusan data pada local storage
    localStorage.removeItem("password");
    window.location.href = "/login"; // Me-ridirect ke halaman login
  };

  return (
    <div className="flex items-center my-2 text-white px-10 lg:my-2">
      <div className="flex items-center">
        <img src="image/logo.png" alt="logo" className="w-20 mr-8" />

        <div className="flex items-center gap-4">
          <div className="flex gap-10 ">
            <IconButton icon={<AiFillHome />} tooltipContent="Beranda" />
            <IconButton icon={<MdOutlineListAlt />} tooltipContent="Mengikuti" />
            <IconButton icon={<IoCreateOutline />} tooltipContent="Jawab" />
            <IconButton icon={<MdOutlineGroups />} tooltipContent="Ruang" />
            <IconButton
              icon={<IoIosNotificationsOutline />}
              tooltipContent="Notifikasi"
            />
          </div>
          <div className="flex w-full max-w-xl relative items-center">
            <FaSearch className="absolute left-8 mr-8 text-sm text-gray-400" />
            <input
              type="text"
              className="w-96 md:w-72 h-8 ml-4 pl-9 text-sm border-gray-200 rounded-sm focus:outline-none text-black"
              placeholder="Cari quora"
            ></input>
          </div>
          <IconButton
            icon={<TbCircleLetterM />}
            tooltipContent="example@mail.com" 
          />
          <IconButton
            icon={<TbWorld />}
            tooltipContent={
              <div>
                <p className="text-bold">Bahasa</p>
                <p className="">Indonesia</p>
                <p>Tambah bahasa</p>
                <p>Lihat semua bahasa</p>
              </div>
            }
            className="rounded-none"
          />
        </div>

        <div className="bg-red-700 w-full rounded-full ml-4 px-4 text-sm flex items-center justify-center">
          <Button color="" onClick={handleLogout}>
            Tambah pertanyaan
          </Button>
          <FaChevronDown
            className="mr-2 mt-1 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
