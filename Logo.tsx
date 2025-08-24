import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2">
      <motion.div
        className="font-bold text-xl tracking-tight text-foreground"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        BMS
      </motion.div>
    </Link>
  );
}