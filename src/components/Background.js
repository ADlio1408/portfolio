import { motion, useScroll, useTransform } from "framer-motion";

export default function Background() {
  const { scrollY } = useScroll();

  // different layers move at different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: -1,
    }}>

      {/* LAYER 1 */}
      <motion.div
        style={{
          y: y1,
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "linear-gradient(135deg, #e6b8b7, #d8c7c5)",
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "10%",
          left: "20%",
          opacity: 0.4,
        }}
      />

      {/* LAYER 2 */}
      <motion.div
        style={{
          y: y2,
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "linear-gradient(135deg, #e6b8b7, #5cc1c0)",
          borderRadius: "50%",
          filter: "blur(150px)",
          top: "50%",
          left: "60%",
          opacity: 0.3,
        }}
      />

    </div>
  );
}