import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import React from 'react'
import { AiOutlineBorderOuter } from 'react-icons/ai'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>S-aflou | Web Developer </title>
        <meta name="description" content="Saflou" />
        <link rel="icon" href="/favicon.ico" />
      </head>
    <Navbar />
   <Main />
   <About />
   <Skills />
   <Project />
    </div>
  )
}
