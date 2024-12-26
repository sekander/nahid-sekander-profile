import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import RotatingBox from './components/RotatingBox'
// import Navbar from './components/Navbar'
import './App.css'
import Sidebar from './components/Sidebar'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-8'>
      {/* Navbar */}
      {/* <Navbar /> */}
      
      <Sidebar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />            
          <Route path='/projects' element={<Projects />} />    
          <Route path='/contact' element={<Contact />} />
      </Routes>



      {/* Animated Header*/}
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{opacity: 1, y:0}}
        transition={{duration: 1}}
      >
        Welcome to Three.js + Framer Motion + TailwindCSS
      </motion.h1>

      {/* Canvas with Three.js*/}
      <div className='w-full h-96'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingBox />
          <OrbitControls />
        </Canvas>
      </div>

      {/*Animated Button*/}
      <motion.button
        className='bg-blue-500 px-4 py-2 rounded'
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count is {count}
      </motion.button>
    </div>
  )
}

export default App
