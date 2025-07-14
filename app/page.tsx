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
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </>
  )
}

export default Page;