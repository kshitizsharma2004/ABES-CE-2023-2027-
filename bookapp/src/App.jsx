import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { CartProvider } from "./context/CartContext"; // ✅ Import CartProvider
import "./App.css";

function App() {
  return (
    <CartProvider> {/* ✅ Wrap the app in CartProvider */}
      <Router>
        <Navbar />
        <div id="adi">
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <div className="book-list" id="ida">
                  <Book name="Maths Book" price={500} />
                  <Book name="Chemistry Book" price={800} />
                  <Book name="Physics Book" price={900} />
                </div>
              }
            />

            {/* 🔐 Login Page */}
            <Route path="/login" element={<Login />} />

            {/* 📝 Registration Page */}
            <Route path="/register" element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
