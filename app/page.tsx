"use client"

import Header from "@/src/components/Header";
import About from "@/src/sections/About";
import Home from "@/src/sections/Home";
import Services from "@/src/sections/Services";


const Page = () => {
  return (

    <>
      <Header />
      <Home />
      <Services />
      <About />
    </>
  )
}

export default Page;