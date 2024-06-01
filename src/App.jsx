import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// IMPORTE DAS PÁGINAS
import Home from "./pages/Home";
import PoliticaAmbiental from "./pages/PoliticaAmbiental";





function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/politicaambiental" element={<PoliticaAmbiental />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
