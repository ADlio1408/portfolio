import { motion } from "framer-motion";

function AnimatedText({ text }) {
  return (
    <motion.h1 style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.06,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedText;