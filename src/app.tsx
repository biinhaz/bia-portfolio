import { HeroSection } from "./components/hero-section";
import { Header } from "./components/header";
import { AboutMe } from "./components/about-me";
import './i18n';

export function App() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutMe />
    </div>
    </main>
  )
}