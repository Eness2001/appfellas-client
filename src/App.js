import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MyFlights from "./Pages/MyFlights";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="mx-4 my-4 bg-gray-100 rounded-2xl h-[calc(100vh-6rem)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-flight" element={<MyFlights />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
