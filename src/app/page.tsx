"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/components/Hero'
import KickBox from '@/components/KickBox'
import Works from '@/components/HowItWorks'

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, [])
  return (
    <div>
      <Hero />
      <KickBox />
      <Works/>
    </div>
  )
}

export default page
