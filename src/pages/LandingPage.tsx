import { NavBar } from "@/components/organisms/NavBar"
import { Hero } from "@/components/organisms/Hero"
import { FeaturesSection } from "@/components/organisms/FeaturesSection"
import { StatsSection } from "@/components/organisms/StatsSection"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-space-900 text-white selection:bg-space-accent selection:text-white overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesSection />
      </main>
    </div>
  )
}
