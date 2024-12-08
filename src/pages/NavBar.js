import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const Menu = [
    { name: "HOME", path: "/", id: "home" },
    { name: "ABOUT", path: "/about", id: "about" },
    { name: "PROJECTS", path: "/projects", id: "projects" },
    { name: "CERTIFICATIONS", path: "/certificates", id: "certificates" },
    { name: "CONTACT", path: "/contact", id: "contact" },
  ];

  // Variants for animations
  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="w-full h-full bg-black text-white p-8 md:p-16 flex flex-col items-center md:items-start max-md:hidden">
      {/* Logo */}
      <div>
        <p className="font-serif text-2xl">PG</p>
      </div>

      {/* Menu Items */}
      <motion.div
        className="pt-12 md:pt-[100px]"
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-6">
          {Menu.map((menu, index) => (
            <Link to={menu.path} key={menu.id}>
              <motion.div
                className={`font-medium hover:font-semibold cursor-pointer ${
                  location.pathname === menu.path ? "line-through	" : ""
                }`}
                custom={index}
                variants={menuVariants}
              >
                {menu.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex flex-row md:flex-col pt-12 md:pt-[130px] gap-6"
        initial="hidden"
        animate="visible"
      >
        {[
          {
            icon: FaLinkedinIn,
            link: "https://www.linkedin.com/in/pranaygoud1229/",
          },
          {
            icon: FaGithub,
            link: "https://www.github.com/pranaygoud01",
          },
          {
            icon: FaInstagram,
            link: "https://www.instagram.com/pranayygoud",
          },
        ].map((Icon, index) => (
          <motion.a
            key={index}
            className="text-base bg-white w-fit text-black p-2 rounded-full"
            href={Icon.link}
            target="_blank"
            rel="noreferrer"
            custom={index}
            variants={socialVariants}
          >
            <Icon.icon />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="pt-12 text-center md:text-left">
        <p className="text-xs">
          Copyright ©2024 Pranay <br />
          Goud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NavBar;
