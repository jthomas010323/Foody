import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import "./App.css";


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm   bg-warning shadow text-dark mb-5 fs-3 pt-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>Foody</h1>
        </Link>

      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
