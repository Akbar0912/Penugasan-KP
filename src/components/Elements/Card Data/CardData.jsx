/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

// ArrayList Mapping (Rendering List)
const product = [
  {
    id: 1,
    name: "Sepatu Satu",
    price: "Rp 99.999",
    image: "image/product2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam ipsam ea totam doloribus non eaque earum quisquam impedit aliquam quidem, at praesentium officiis voluptatem voluptatum. Quasi obcaecati quae ullam.",
  },
  {
    id: 2,
    name: "Sepatu Dua",
    price: "Rp 99.999",
    image: "image/product2.jpg",
    desc: "Quam ipsam ea totam doloribus non eaque earum quisquam impedit aliquam quidem, at praesentium officiis voluptatem voluptatum. Quasi obcaecati quae ullam.",
  },
  {
    id: 3,
    name: "Sepatu Tiga",
    price: "Rp 99.999",
    image: "image/product2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam ipsam ea totam doloribus non eaque earum quisquam impedit aliquam quidem, at praesentium officiis voluptatem voluptatum. Quasi obcaecati quae ullam.",
  },
  {
    id: 4,
    name: "Sepatu Empat",
    price: "Rp 99.999",
    image: "image/product2.jpg",
    desc: "Adipisicing elit. Ipsum quam ipsam ea totam doloribus non eaque earum quisquam impedit aliquam quidem, at praesentium officiis voluptatem voluptatum. Quasi obcaecati quae ullam.",
  },
];

const email = localStorage.getItem('email'); //Menangkap dan menampilkan data email

const CardData = () => {
  const handleLogout = () => { //Konsep Event Handler
    localStorage.removeItem('email'); // Melakukan penghapusan data pada local storage
    localStorage.removeItem('password');
    window.location.href = "/login"; // Me-ridirect ke halaman login
  };

  return (
    //React tidak dapat menerima dua komponen, maka dibungkus dengan menggunakan fragmen atau div
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 w-full text-white items-center px-10">
        {email}
        <Button color="bg-red-500 ml-5" onClick={handleLogout}>Logout</Button>
      </div> 
      <div className="flex justify-center py-5">
        {product.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default CardData;