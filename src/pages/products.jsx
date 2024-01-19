/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import SearchBar from "../components/Elements/Header/Header";
import SideBar from "../components/Elements/Sider/SideBar";
import Dashboard from "./dashboard";
import Sider from "../components/Elements/Sider/Sider";

const ProductPage = () => {
  return (
    <Fragment>
      <div>
        <div>
          <SearchBar />
        </div>
      </div>

      <div className="flex px-20 h-screen bg-gray-100">
        <div className="">
          <SideBar />
        </div>
        <div>
          <Dashboard />
        </div>
        <div>
          <Sider />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
