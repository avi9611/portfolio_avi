import React from "react";
import { motion } from "framer-motion";

interface FramerWrapperProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
  delay?: number;
  className?: string;
}

const FramerWrapper: React.FC<FramerWrapperProps> = ({
  children,
  x = 0,
  y = 0,
  delay = 0,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0, x, y }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 50 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FramerWrapper;