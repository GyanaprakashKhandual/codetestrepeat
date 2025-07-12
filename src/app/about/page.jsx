'use client'
import React from 'react'
import ASidebar from '../components/ASidebar'
import { useEffect } from 'react';

function page() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);
  return (
    <>
    <ASidebar/>
    </>
  )
}

export default page