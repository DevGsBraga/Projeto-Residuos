import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// IMPORTE DAS PÁGINAS
import Home from "./pages/Home";





function App() {

  return (
    <>


    <div id="container-app">
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
