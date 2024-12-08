import React from "react";
import { motion } from "framer-motion";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <motion.div
      className="w-full h-fit p-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="italic text-sm font-semibold">Let’s connect!</h1>
        <h1 className="font-bold text-4xl mt-2">CONTACT ME</h1>
        <p className="text-neutral-900 mt-3">
          Reach out to me by filling the form below or using the contact details
          provided.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Contact Form */}

        {/* Contact Details */}
        <motion.div
          className="bg-white text-neutral-800 p-8 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <IoCallOutline className="text-4xl p-2 rounded-full bg-slate-50 " />
              <div>
                <h3 className="text-sm font-bold">Phone</h3>
                <p className="text-neutral-600">+91 89192 62896</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoMailOutline className="text-4xl p-2 rounded-full bg-slate-50 " />
              <div>
                <h3 className="text-sm font-bold">Email</h3>
                <p className="text-neutral-600">pranaygoudpalle123@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CiLocationOn className="text-4xl p-2 rounded-full bg-slate-50 " />
              <div>
                <h3 className="text-sm font-bold">Address</h3>
                <p className="text-neutral-600">Hyderabad,Telangana,India</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-white bg-gradient-to-r from-violet-500 via-red-500 to-yellow-500 p-8 "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-2 border-b focus:outline-none   bg-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border-b focus:outline-none  bg-transparent"
                required
              />
            </div>
            <div>
              <label className="block  text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 border-b focus:outline-none bg-transparent"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full p-2  bg-black   text-white font-semibold hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
