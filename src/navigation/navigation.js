import React from "react";
import Home from "../Component/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Tasks from "../Component/Tasks";
import Contact from "../Component/Contact";
import Addtask from "../Component/Addtask";
import Navbar from "../Component/nav";
export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar/>} >
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/addTask" element={<Addtask />}/>
        </Route>
      </Routes>
    </Router>
  );
}
