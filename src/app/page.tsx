"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/components/Hero'

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, [])
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default page
