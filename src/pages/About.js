import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="section">

      {/* TEXT */}
      <div style={{ maxWidth: "500px" }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m a developer focused on building smooth, interactive UI experiences
          using React and modern web technologies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I care about design, motion, and creating interfaces that feel alive.
        </motion.p>

      </div>

      {/* SIDE GLOW */}
      <motion.div
        className="floating"
        style={{ right: "10%", top: "50%", transform: "translateY(-50%)" }}
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #e6b8b7, #d8c7c5)",
            filter: "blur(80px)",
            opacity: 0.6,
          }}
        />
      </motion.div>

    </div>
  );
}