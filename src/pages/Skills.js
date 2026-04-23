import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
      "React",
      "JavaScript",
      "HTML / CSS",
      "Python",
      "Machine Learning",
      "Git & GitHub",
    ];
  
    return (
      <div className="section" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h1>
  
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 5px 12px rgba(0,0,0,0.05)",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
  
      </div>
    );
  }