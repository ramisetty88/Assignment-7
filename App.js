import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Plays from "./pages/Plays";
import Streams from "./pages/Streams";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// New feature pages
import Buzz from "./pages/Buzz";
import Corporates from "./pages/Corporates";
import Giftcards from "./pages/Giftcards";
import Offers from "./pages/Offers";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* Core Routes */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route exact path="/plays" element={<Plays />} />
          <Route exact path="/streams" element={<Streams />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/my-tickets" element={<Tickets />} />
          {/* New Feature Routes */}
          <Route exact path="/buzz" element={<Buzz />} />
          <Route exact path="/corporates" element={<Corporates />} />
          <Route exact path="/giftcards" element={<Giftcards />} />
          <Route exact path="/gifts" element={<Giftcards />} />{" "}
          {/* Alias for /giftcards */}
          {/* Optional 404 fallback */}
          <Route exact path="/offers" element={<Offers />} />
          <Route exact path="/help" element={<Help />} />
          {/* Catch-all for 404 */}
          <Route
            path="*"
            element={<h2 className="text-center mt-5">404 - Page Not Found</h2>}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
