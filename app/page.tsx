import Navigation from "@/components/navigation"
import ScrollingBackground from "@/components/scrolling-background"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ScrollingBackground />
      <Testimonials />
      <Footer />
    </div>
  )
}
