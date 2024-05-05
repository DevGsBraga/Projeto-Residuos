import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// IMPORTE DAS PÁGINAS
import Home from "./pages/Home";





function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
