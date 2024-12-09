import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Profile.png";
import { MdArrowOutward } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="w-full h-fit p-28 max-lg:px-10">
        <div>
          <motion.p
            className="text-sm font-semibold italic"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nice to meet you!
          </motion.p>
          <motion.h1
            className="font-bold text-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            WELCOME TO...
          </motion.h1>
        </div>
        <div className="flex max-lg:flex-col  gap-10">
          <motion.div
            className="flex flex-col gap-3 w-[35%] max-lg:w-full items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-[350px] h-[350px] object-cover rounded-full"
            />
            <h1 className="font-bold text-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              PRANAY GOUD
            </h1>
            <p>
              <span className="font-semibold italic">Student at </span>
              SICET, Hyderabad
            </p>
            <a
              className="underline text-sm flex"
              href="https://drive.google.com/file/d/1d3khcQIWVsPM6sQuMONSLIR9__xoK5qY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV <MdArrowOutward className="text-lg" />
            </a>
          </motion.div>
          <motion.div
            className="w-[55%] max-lg:w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-6 text-neutral-800 pb-10 border-b-2">
              <p className="flex gap-2 text-xs font-bold">
                <IoCallOutline className="bg-slate-100 rounded-full text-3xl p-2" />
                <span className="font-bold text-sm italic pt-1">
                  +91 8919 262 896
                </span>
              </p>
              <p className="flex gap-2 text-xs font-bold">
                <IoMailOutline className="bg-slate-100 rounded-full text-3xl p-2" />
                <span className="font-bold text-sm italic pt-1">
                  pranaygoudpalle123@gmail.com
                </span>
              </p>
              <p className="flex gap-2 text-xs font-bold">
                <CgProfile className="bg-slate-100 rounded-full text-3xl p-2" />
                <span className="font-bold text-sm italic pt-1">22 yrs</span>
              </p>
              <p className="flex gap-2 text-xs font-bold">
                <CiLocationOn className="bg-slate-100 rounded-full text-3xl p-2" />
                <span className="font-bold text-sm italic pt-1">
                  Hyderabad, Telangana, India
                </span>
              </p>
            </div>
            <motion.div
              className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 pt-8 pb-24"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-5xl font-bold bg-gradient-to-tr from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    3+
                  </h1>
                  <p className="text-xs font-bold italic">
                    Years of
                    <br /> experience...
                  </p>
                </div>
                <p className="font-sans pt-5 text-sm w-9/12 max-lg:w-full">
                  Hello there! My name is Pranay Goud. I am a web designer &
                  developer, and I'm very passionate and dedicated to my work.
                </p>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <h1 className="text-5xl font-bold bg-gradient-to-tr from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    10+
                  </h1>
                  <p className="text-xs font-bold italic">Projects</p>
                </div>
                <p className="font-sans pt-5 text-sm w-9/12 max-lg:w-full">
                  I have done 10+ Projects using Latest Technologies. I have
                  acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="h-[100px] bg-black text-white p-5 px-10 max-lg:px-3 items-center flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <BiSolidQuoteAltLeft className="text-7xl max:lg:text-3xl text-neutral-400" />
              <p className="text-base max-lg:text-sm font-sans font-semibold">
                "Software engineering is not just about writing code. It's about
                solving problems and making lives better."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="h-fit bg-gradient-to-r from-violet-500 via-red-500 to-yellow-500 text-white p-20 max-lg:px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="grid grid-cols-2 max-lg:grid-cols-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gap-3 flex flex-col mt-5">
              <h1 className="italic text-sm font-semibold">Academics</h1>
              <h1 className="font-bold text-3xl">MY ACADEMICS</h1>
            </div>
            <p className="w-6/12 text-sm pt-10">
              Hello there! My name is Pranay Goud. I am a web designer &
              developer, and I'm very passionate and dedicated to my work.
            </p>
            <motion.a
              href="https://drive.google.com/file/d/1d3khcQIWVsPM6sQuMONSLIR9__xoK5qY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-10 font-medium w-fit px-8 py-3 text-xs bg-black text-white flex gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download my Resume{" "}
              <span className="bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] p-1">
                <MdArrowOutward />
              </span>
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 max-lg:mt-16"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              {
                year: "2021 - 2025",
                course: "Information Technology, Bachelor of Technology",
                institute: "SICET, HYDERABAD",
              },
              {
                year: "2019 - 2021",
                course: "Intermediate",
                institute: "NARAYANA JUNIOR COLLEGE, HYDERABAD",
              },
              {
                year: "2018 - 2019",
                course: "SSC/10",
                institute: "TS MODEL SCHOOL, HYDERABAD",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-3 pb-5 border-b border-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex justify-between text-xs font-semibold">
                  <p>{item.year}</p>
                  <p>{item.course}</p>
                </div>
                <h1 className="font-bold text-2xl">{item.institute}</h1>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
