"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/components/Hero'
import KickBox from '@/components/KickBox'
import Works from '@/components/HowItWorks'
import Community from '@/components/Community'
import Intrapreneurship from '@/components/Intrapreneurship'
import KickboxProcess from '@/components/KickBoxProcess'

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
      <Works />
      <KickboxProcess/>
      <Community />
      <Intrapreneurship/>
    </div>
  )
}

export default page
