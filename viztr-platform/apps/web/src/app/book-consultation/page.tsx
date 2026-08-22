import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Schedule a consultation with VizTR for architectural visualization or XR services. Choose your preferred date and time.',
}

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Book a Consultation</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Schedule a time to discuss your project with our visualization and XR experts.</p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-2xl">
            <div className="card p-8">
              <h2 className="font-display font-bold text-2xl text-text-primary mb-6">Schedule Your Consultation</h2>
              <form className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name *</label>
                    <input type="text" id="name" name="name" className="input" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
                    <input type="email" id="email" name="email" className="input" required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" className="input" required placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">Company</label>
                    <input type="text" id="company" name="company" className="input" placeholder="Your company name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">Service Selection *</label>
                  <select id="service" name="service" className="input" required>
                    <option value="">Select services (hold Ctrl/Cmd for multiple)</option>
                    <optgroup label="Studio">
                      <option value="exterior">Exterior Visualization</option>
                      <option value="interior">Interior Visualization</option>
                      <option value="walkthrough">Walkthrough Animation</option>
                    </optgroup>
                    <optgroup label="XR World">
                      <option value="webxr">WebXR</option>
                      <option value="webar">WebAR</option>
                      <option value="vr">Virtual Reality</option>
                      <option value="virtual-tour">Virtual Tour</option>
                      <option value="pixel-streaming">Pixel Streaming</option>
                    </optgroup>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-text-primary mb-2">Preferred Date *</label>
                    <input type="date" id="date" name="date" className="input" required min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-text-primary mb-2">Preferred Time *</label>
                    <select id="time" name="time" className="input" required>
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-text-primary mb-2">Project Details *</label>
                  <textarea id="details" name="details" rows={4} className="input" required placeholder="Briefly describe your project, goals, timeline, and any specific requirements..."></textarea>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-primary mb-2">Budget Range</label>
                  <select id="budget" name="budget" className="input">
                    <option value="">Select budget range (optional)</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" name="consent" className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent" required />
                  <label htmlFor="consent" className="text-sm text-text-secondary">
                    I consent to VizTR storing my information to schedule and confirm this consultation. *
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-full py-3 text-lg">Book Consultation</button>
                <p className="text-center text-sm text-text-secondary">We'll confirm your appointment via email within 24 hours.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}