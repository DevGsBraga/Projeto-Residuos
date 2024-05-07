import  { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"; // Importe seu arquivo de estilos CSS

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Função para centralizar o contêiner na tela
    const centerContainer = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        const offset = (windowWidth - containerWidth) / 2;
        containerRef.current.style.left = offset + "px";
      }
    };

    // Chama a função de centralização quando a página é carregada ou redimensionada
    window.addEventListener("load", centerContainer);
    window.addEventListener("resize", centerContainer);

    // Remove os event listeners quando o componente é desmontado
    return () => {
      window.removeEventListener("load", centerContainer);
      window.removeEventListener("resize", centerContainer);
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
