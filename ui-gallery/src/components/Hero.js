import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.h1
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.4 }}
      initial={{
        opacity: 0.1,
      }}
    >
      Framer Hero
    </motion.h1>
  );
};

export default Hero;
