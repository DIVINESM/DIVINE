import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md bg-white">
    <h1 className="text-2xl font-bold tracking-wide text-purple-600">DIVINE</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/browse">Browse</Link>
      <Link to="/dm">Message</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-8 text-center bg-gray-50">
    <h2 className="text-3xl font-semibold text-purple-600 mb-4">Welcome to DIVINE</h2>
    <p className="mb-6 text-gray-700">Your digital haven for soulful ebooks. Discover stories and guides that inspire, heal, and empower.</p>
    <img src="https://source.unsplash.com/featured/?books,feminine" alt="Ebook display" className="mx-auto rounded-2xl shadow-lg w-2/3" />
  </div>
);

const Browse = () => (
  <div className="p-8 bg-white">
    <h2 className="text-2xl text-purple-600 font-medium mb-4">Browse Ebooks</h2>
    <p className="text-gray-600">(Ebooks list will go here.)</p>
  </div>
);

const Message = () => (
  <div className="p-8 bg-white">
    <h2 className="text-2xl text-purple-600 font-medium mb-4">Direct Message</h2>
    <p className="text-gray-600">(Contact or chat feature coming soon.)</p>
  </div>
);

const Cart = () => (
  <div className="p-8 bg-white">
    <h2 className="text-2xl text-purple-600 font-medium mb-4">Your Cart</h2>
    <p className="text-gray-600">(Cart items will show here.)</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/dm" element={<Message />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
