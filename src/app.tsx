import { HeroSection } from "./sections/hero-section";
import { Header } from "./sections/header";
import { AboutMe } from "./sections/about-me";
import { Footer } from "./sections/footer";
import './i18n';
import { Frameworks } from "./sections/frameworks";
import { Projects } from "./sections/projects";
import { EmailSection } from "./sections/email-section";
import { Certifications } from "./sections/certifications";

export function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutMe/>
      <Frameworks/>
      <Projects/>
      <Certifications/>
      <EmailSection/>
    </div>
    <Footer/>
    </main>
  )
}