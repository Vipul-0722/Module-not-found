import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Routers
