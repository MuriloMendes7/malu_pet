import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Space from './components/Space'
import Visit from './components/Visit'
import WhatsAppFloat from './components/WhatsAppFloat'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Space />
        <Highlights />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
