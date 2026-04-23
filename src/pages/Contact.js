import { motion } from "framer-motion";

export default function Contact() {
    return (
      <div className="section" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h1>
  
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations or opportunities.
        </motion.p>
  
        <div style={{ marginTop: "20px" }}>
          <p>Email: your@email.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourname</p>
        </div>
  
      </div>
    );
  }