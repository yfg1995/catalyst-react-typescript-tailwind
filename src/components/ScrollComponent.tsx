import { FC, PropsWithChildren, useEffect, useRef } from "react";
import {
  AnimationPlaybackControls,
  animate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export interface IScrollComponent extends PropsWithChildren {
  className?: string;
}

export const ScrollComponent: FC<IScrollComponent> = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const animationControls = useRef<AnimationPlaybackControls>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!animationControls.current) return;
    animationControls.current.time =
      progress * animationControls.current.duration;
  });

  useEffect(() => {
    if (!ref.current) return;
    animationControls.current = animate([
      [
        ".circle-bl",
        {
          x: ["-50%", "0%"],
          y: ["-50%", "-120%"],
        },
        {
          ease: "easeInOut",
        },
      ],
      [
        ".circle-br",
        {
          x: ["50%", "0%"],
          y: ["-50%", "-120%"],
        },
        {
          ease: "easeInOut",
        },
      ],
    ]);
    animationControls.current.pause();
  }, [ref]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
