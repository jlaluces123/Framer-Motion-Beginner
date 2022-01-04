import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ label }) => {
  return (
    <motion.button
      animate={{ x: 100 }}
      transition={{ ease: 'easeOut', duration: 2 }}
    >
      {label}
    </motion.button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
