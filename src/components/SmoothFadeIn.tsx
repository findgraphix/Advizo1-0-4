
import React, { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SmoothFadeInProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

const SmoothFadeIn: React.FC<SmoothFadeInProps> = ({
  children,
  delay = 0,
  yOffset = 30,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.18,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0, transition: { delay: delay / 1000, duration: 0.7, type: "spring", stiffness: 60, damping: 18 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothFadeIn;
