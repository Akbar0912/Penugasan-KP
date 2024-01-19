import { CiSquarePlus } from "react-icons/ci";
import Component from "./Component";

const SideBar = () => {
  return (
    <div className="sidebar p-4 w-[180px] text-center ">
      <div className="flex text-gray-500 bg-gray-200 rounded-sm py-1">
        <CiSquarePlus className="text-2xl ml-1" />
        <p className="text-sm ml-2">Buat Ruang</p>
      </div>
      <div>
        <Component imageSrc="image/kesehatan.png" title="Kesehatan" />
        <Component imageSrc="image/psikologi.jpg" title="Psikologi" />
        <Component imageSrc="image/inggris.jpg" title="Bahasa Inggris" />
        <Component imageSrc="image/musik.jpg" title="Musik" />
        <Component imageSrc="image/film.jpeg" title="Film" />
        <Component imageSrc="image/teknologi.jpg" title="Teknologi" />
      </div>

      <hr className="my-4"></hr>

      <div className="text-gray-500 text-sm text-left">
        <a href="">Tentang Kami</a>
        <span className="mx-1">·</span> {/* Tambahkan titik di tengah */}
        <a href=""> Karier</a>
        <span className="mx-1">·</span>
        <a href=""> Ketentuan</a>
        <span className="mx-1">·</span>
        <a href=""> Privasi</a>
        <span className="mx-1">·</span>
        <a href=""> Pengguna Dapat Diterima</a>
        <span className="mx-1">·</span>
        <a href=""> Beriklan</a>
        <span className="mx-1">·</span>
        <a href=""> Pers</a> {/* Ini code smells (duplicate code) */}
      </div>
    </div>
  );
};

export default SideBar;
