import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  HeroSection,
  MarqueeSection,
  ServiceCategories,
  StudioPreview,
  XRPreview,
  ShowreelSection,
  PortfolioPreview,
  XRExperienceSection,
  TrackProjectSection,
  BenefitsSection,
  HowItWorksSection,
  UseCasesSection,
  TestimonialsSection,
  FAQSection,
  FinalCTASection,
} from '@/components/sections'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <MarqueeSection />
        <ServiceCategories />
        <StudioPreview />
        <XRPreview />
        <ShowreelSection />
        <PortfolioPreview />
        <XRExperienceSection />
        <TrackProjectSection />
        <BenefitsSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}