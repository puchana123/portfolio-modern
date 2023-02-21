import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className=" sticky top-0 flex items-start justify-between mx-auto max-w-7xl p-5">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon network="youtube" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="linkedin" fgColor="gray" bgColor="transparent" />
        <SocialIcon network="github" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
       className="flex flex-row items-center text-gray-400 cursor-pointer">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
