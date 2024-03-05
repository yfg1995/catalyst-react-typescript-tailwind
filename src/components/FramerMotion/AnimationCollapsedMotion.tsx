import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export interface IAnimationCollapsedMotion extends PropsWithChildren {
  className?: string;
  duration?: number;
}

export const AnimationCollapsedMotion: FC<IAnimationCollapsedMotion> = ({
  className,
  duration = 0.4,
  children,
}) => {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      transition={{ duration, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
