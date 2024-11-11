import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "./about/page";
import Contact from "./contact/page";
import Project from "./projects/page";
import Servies from "./services/page";

export default function HomePage(){
  return(
    <div>
      <Header />
      <Hero />
      <About />
      <Servies />
      <Project />
      <Contact />
    </div>
  )
}