import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pt-10">
        About
      </h3>
      <div className="flex flex-col items-center md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="md:mb-0 mb-5 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
          src="/images/zebra.jpg"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#f7ab0a]/80">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            autem officiis magnam illo numquam distinctio nihil sint neque
            voluptatibus, temporibus hic ipsum odio laboriosam tempora mollitia
            eaque esse sit dolorem? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Voluptatem repellendus possimus aspernatur
            incidunt. Doloribus officiis voluptatem aut, expedita nam aliquam
            voluptatum numquam, quod optio perspiciatis voluptate molestias
            repellat praesentium. Eius.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
