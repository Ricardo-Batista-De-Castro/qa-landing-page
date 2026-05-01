import Header from './components/Header'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Services from './components/Services'
import Process from './components/Process'
import PricingModels from './components/PricingModels'
import Benefits from './components/Benefits'
import Tools from './components/Tools'
import About from './components/About'
import Deliverables from './components/Deliverables'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <PricingModels />
        <Benefits />
        <Tools />
        <About />
        <Deliverables />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
