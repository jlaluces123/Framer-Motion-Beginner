import Hero from '../components/Hero';
import { motion } from 'framer-motion';

export default {
  title: 'Hero',
  component: Hero,
};

export const Basic = () => (
  <motion.div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <Hero />
  </motion.div>
);
