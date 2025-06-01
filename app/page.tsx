"use client"

import Header from "@/src/components/Header";
import About from "@/src/sections/About";
import Contact from "@/src/sections/Contact";
import Home from "@/src/sections/Home";
import Services from "@/src/sections/Services";


const Page = () => {
  return (

    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  )
}

export default Page;