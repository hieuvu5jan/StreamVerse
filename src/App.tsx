import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Home Page */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />

    </Routes>
  );
}

export default App;