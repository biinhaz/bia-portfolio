import { HeroSection } from "./components/hero-section";
import { Header } from "./components/header";
import { AboutMe } from "./components/about-me";
import { Footer } from "./components/footer";
import './i18n';
import { Languages } from "./components/languages";
import { Projects } from "./components/projects";
import { EmailSection } from "./components/email-section";

export function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header/>
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutMe/>
      <Languages/>
      <Projects/>
      <EmailSection/>
    </div>
    <Footer/>
    </main>
  )
}