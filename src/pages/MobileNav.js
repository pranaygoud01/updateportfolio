import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const Menu = [
    { name: "HOME", path: "/", id: "home" },
    { name: "ABOUT", path: "/about", id: "about" },
    { name: "PROJECTS", path: "/projects", id: "projects" },
    { name: "CERTIFICATIONS", path: "/certificates", id: "certificates" },
    { name: "CONTACT", path: "/contact", id: "contact" },
  ];

  const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col relative">
      {/* Navbar Header */}
      <div className="h-[60px] fixed bg-black w-screen text-white flex justify-between items-center z-50">
        <div className="ml-6">
          <Link to="/" className="font-serif font-bold text-xl">
            PG
          </Link>
        </div>
        <button className="mr-6" onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose className="text-white text-4xl" />
          ) : (
            <IoMenu className="text-white text-4xl" />
          )}
        </button>
      </div>

      {/* Navbar Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-screen h-screen bg-neutral-900 text-white z-40`}
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="flex flex-col text-white font-bold p-10 gap-8 pt-24">
          {Menu.map((menu) => (
            <Link
              to={menu.path}
              key={menu.id}
              onClick={handleClose}
              className="hover:text-gray-400 transition duration-200"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Backdrop */}
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        />
      )}
    </div>
  );
};

export default MobileNav;
