import { motion } from "framer-motion";

/* -------- HERO -------- */

function Hero() {
  return (
    <div id="home" className="section">
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "650px",      // 🔥 keeps layout tight
          display: "flex",
          flexDirection: "column", // 🔥 FORCE vertical stack
          alignItems: "flex-start",
        }}
      >
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span style={{ color: "#e6b8b7" }}>Adrija Bandi</span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ maxWidth: "500px" }}
        >
          I aim to build intelligent systems that enhance communication between humans and machines. I’m deeply interested in the intersection of psychology and technology, and I actively work on projects that explore and apply these ideas.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          className="btn"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "25px" }}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Projects
        </motion.button>

        {/* IMAGE (LANDSCAPE FIXED) */}
        <motion.img
          src="/your-image.jpg"
          alt="Adu"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            marginTop: "50px",

            width: "100%",
            maxWidth: "800px",
            height: "490px",              // 🔥 FORCE LANDSCAPE

            objectFit: "cover",           // 🔥 CROPS IMAGE
            objectPosition: "center 50%", // 🔥 adjust face if needed

            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",

            marginLeft: "500px",   // 🔥 centers horizontally
            marginRight: "600px",
          }}
        />
      </div>
    </div>
  );
}

/* -------- ABOUT -------- */
function About() {
  return (
    <div id="about" className="section">
      <div style={{ maxWidth: "500px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a developer interested in understanding human behavior and interaction through data. I explore the intersection of psychology and technology, focusing on how patterns in human decisions can be modeled and predicted.

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          My work includes projects like salary prediction systems, meme virality analysis, and Bambique—each aimed at uncovering how people behave, engage, and respond.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
           I enjoy using machine learning to build systems that go beyond functionality, helping create more meaningful and intelligent interactions between humans and technology.
        </motion.p>
      </div>
    </div>
  );
}

/* -------- PROJECTS -------- */
function Projects() {
  const projectList = [
    {
      title: "Salary-Prediction Model",
      desc: "Salary prediction model, predicts the salary based on your experience and skills along with a small summery of you and the candidates compared.",
      github: "#"
    },
    {
      title: "Meme-Virality",
      desc: "This model predicts the virality of a meme based only on its visual features.",
      github: "#"
    },
    {
      title: "Bambique",
      desc: "A research based on sustainable fabric with is technically equipped.",
      github: "#"
    },
  ];

  return (
    <div
      id="projects"
      className="section"
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        {projectList.map((proj, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <h3 style={{ color: "#d9a5a4" }}>{proj.title}</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {proj.desc}
            </p>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <a href={proj.github} target="_blank" rel="noreferrer">
                <button className="btn-outline">GitHub</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------- SKILLS -------- */
function Skills() {
    const skills = [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Deep Learning",
      "Recommender Systems",
      "NLP",
    ];
  
    return (
      <div
        id="skills"
        className="section"
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h1>
  
        <div
          style={{
            display: "flex",
            flexDirection: "column",   // 🔥 KEY CHANGE
            gap: "14px",
            marginTop: "25px",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 18,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 8,
                scale: 1.02,
              }}
              style={{
                padding: "14px 18px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "500",
  
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
  
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
  
                cursor: "default",
                transition: "all 0.25s ease",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

/* -------- CONTACT -------- */
function Contact() {
  return (
    <div
      id="contact"
      className="section"
      style={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
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
        <p>Email: adrija.bandi@gmail.com</p>
        <p>GitHub: github.com/ADlio1408</p>
        <p>LinkedIn: linkedin.com/in/adrija-bandi-b367242b0</p>
      </div>
    </div>
  );
}

/* -------- MAIN EXPORT -------- */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}