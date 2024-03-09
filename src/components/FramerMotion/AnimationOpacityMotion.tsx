import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export interface IAnimationOpacityMotion extends PropsWithChildren {
  className?: string;
  duration?: number;
  delay?: number;
}

export const AnimationOpacityMotion: FC<IAnimationOpacityMotion> = ({
  children,
  className,
  duration,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
