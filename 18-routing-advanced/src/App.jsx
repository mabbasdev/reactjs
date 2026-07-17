import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from './pages/NotFound';
import AboutMe from './components/AboutMe';
import AboutPlatform from './components/AboutPlatform';
import Policy from './components/Policy';
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails';
import Navbar2 from './components/Navbar2';

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />

        <Route path="/about" element={<About />}>
          <Route path='me' element={<AboutMe />} />
          <Route path='platform' element={<AboutPlatform />} />
          <Route path='policy' element={<Policy />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  )
}

export default App
