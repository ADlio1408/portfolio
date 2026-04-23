import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FloatingDots from "./components/FloatingDots";

function App() {
  return (
    <>
      <FloatingDots />   {/* 🔥 MUST BE FIRST */}

      <Navbar />
      <Home />
    </>
  );
}

export default App;