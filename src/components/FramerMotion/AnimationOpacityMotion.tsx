import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export interface IAnimationOpacityMotion extends PropsWithChildren {
  className?: string;
  duration?: number;
  delay?: number;
  useExit?: boolean;
}

export const AnimationOpacityMotion: FC<IAnimationOpacityMotion> = ({
  children,
  className,
  duration,
  delay,
  useExit = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={useExit ? { opacity: 0 } : undefined}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
