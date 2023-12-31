import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import React from 'react'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
    <Navbar />
   <Main />
   <About />
   <Skills />
   <Project />
   <Contact />
    </div>
   
  )
}
