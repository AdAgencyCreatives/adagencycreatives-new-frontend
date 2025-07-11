'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronDownIcon from "icons/ChevronDownIcon";
import ChevronUpIcon from "icons/ChevronUpIcon";
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full divide-y divide-gray-400">
      {items?.map((item, index) => (
        <div key={index} className="py-2 border-b border-[#6E6E6E]">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left md:font-bold text-white hover:text-primary transition text-lg 3xl:text-2xl 4xl:text-3xl"
          >
            <span>{item.title}</span>
            {openIndex === index ? (<ChevronUpIcon />) : (<ChevronDownIcon />)}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-2 text-gray-300 font-inter text-sm md:text-lg 3xl:text-2xl 4xl:text-[32px] py-2 px-0 md:py-6 md:px-10">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
