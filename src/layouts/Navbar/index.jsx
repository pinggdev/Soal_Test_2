import React from "react";

import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import navbarBg from "../../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <div
        className={styles.navbarBg}
        style={{ backgroundImage: `url(${navbarBg})` }}
      ></div>
      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
        <Link to={"/"}>
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={logo} alt="logo" className="lg:w-24 w-12" />
            <span className="font-bold lg:text-3xl text-lg ml-8">HOME</span>
          </div>
        </Link>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div className="lg:mt-0 mt-5">
            <Link
              to={"/about"}
              className="items-center mt-4 lg:inline-block lg:mt-0  lg:text-black text-white font-bold lg:text-3xl text-lg  hover:text-blue-900 mr-12"
            >
              ABOUT
            </Link>
            <Link
              to={"/pricing"}
              className=" mt-4 lg:inline-block lg:mt-0  lg:text-black text-white font-bold lg:text-3xl text-lg  hover:text-blue-900 mr-12"
            >
              PRICING
            </Link>
            <Link
              to={"/contact"}
              className=" mt-4 lg:inline-block lg:mt-0  lg:text-black text-white font-bold lg:text-3xl text-lg  hover:text-blue-900"
            >
              CONTACT
            </Link>
            <Link
              to={"/login"}
              className={`inline-block px-12 text-xl py-3 leading-none border rounded lg:text-blue-400 text-white border-white lg:border-blue-400 border-teal hover:border-transparent hover:text-white hover:bg-blue-900 mt-4 lg:mt-0 lg:ml-12 ml-0`}
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
