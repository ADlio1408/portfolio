import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingDots() {
  const [size, setSize] = useState({ w: 1200, h: 800 });

  useEffect(() => {
    setSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  }, []);

  const dots = Array.from({ length: 15 });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {dots.map((_, i) => {
        const dotSize = Math.random() * 12 + 10;

        return (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * size.w,
              y: Math.random() * size.h,
            }}
            animate={{
              x: [
                Math.random() * size.w,
                Math.random() * size.w,
              ],
              y: [
                Math.random() * size.h,
                Math.random() * size.h,
              ],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              background: "rgba(230, 184, 183, 0.5)",
              boxShadow: "0 0 25px rgba(230,184,183,0.4)",
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingDots;