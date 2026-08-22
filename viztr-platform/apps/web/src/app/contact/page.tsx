import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with VizTR for architectural visualization and XR services. We\'re here to bring your vision to life.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Get in Touch</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Ready to start your project? Have questions about our services? We\'d love to hear from you.</p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card p-8">
                <h2 className="font-display font-bold text-2xl text-text-primary mb-6">Send Us a Message</h2>
                <form className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Name *</label>
                      <input type="text" id="name" name="name" className="input" required placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
                      <input type="email" id="email" name="email" className="input" required placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="input" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">Service Interested In *</label>
                    <select id="service" name="service" className="input" required>
                      <option value="">Select a service</option>
                      <option value="exterior">Exterior Visualization</option>
                      <option value="interior">Interior Visualization</option>
                      <option value="walkthrough">Walkthrough Animation</option>
                      <option value="webxr">WebXR</option>
                      <option value="webar">WebAR</option>
                      <option value="vr">Virtual Reality</option>
                      <option value="virtual-tour">Virtual Tour</option>
                      <option value="pixel-streaming">Pixel Streaming</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message *</label>
                    <textarea id="message" name="message" rows={5} className="input" required placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="consent" className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent" required />
                    <label htmlFor="consent" className="text-sm text-text-secondary">
                      I consent to VizTR storing my submitted information to respond to my inquiry. *
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-full py-3 text-lg">Send Message</button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-2xl text-text-primary mb-6">Contact Information</h2>
                  <p className="text-text-secondary mb-8">We're based in Tech City but work with clients globally. Reach out however you prefer.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-primary mb-1">Email</h3>
                      <a href="mailto:hello@viztr.com" className="text-text-secondary hover:text-accent transition-colors">hello@viztr.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-primary mb-1">Phone</h3>
                      <a href="tel:+15551234567" className="text-text-secondary hover:text-accent transition-colors">+1 (555) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-primary mb-1">Address</h3>
                      <p className="text-text-secondary">123 Visualization Ave, Tech City</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 bg-bg-secondary rounded-xl">
                  <h3 className="font-display font-bold text-lg text-text-primary mb-4">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-text-secondary">
                    <span>Monday - Friday</span>
                    <span className="text-right">9:00 AM - 6:00 PM</span>
                    <span>Saturday</span>
                    <span className="text-right">10:00 AM - 4:00 PM</span>
                    <span>Sunday</span>
                    <span className="text-right">Closed</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 6.13 2.585 6.13 5.768 0 5.093-3.163 9.336-7.5 11.22-4.337-1.884-7.5-6.127-7.5-11.22 0-3.183 2.927-5.768 6.13-5.768z" /></svg>, href: 'https://instagram.com/viztr' },
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, href: 'https://linkedin.com/company/viztr' },
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>, href: 'https://twitter.com/viztr' },
                      { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498.684a3.37 3.37 0 00-.942-.1 4.892 4.892 0 00-1.956.708 2.437 2.437 0 01-.77-1.44 4.867 4.867 0 00-1.29 1.4 6.7 6.7 0 01-8.83 3.62 2.433 2.433 0 00-.27-.022 2.4 2.4 0 00-.393.388 4.836 4.836 0 01-1.148.209 2.437 2.437 0 01-.94-1.5 4.866 4.866 0 004.347 3.733 2.4 2.4 0 01-1.08-.32 2.43 2.43 0 01-.516-.504v.07c0 1.16.84 2.12 1.847 2.34a2.35 2.35 0 01-.88-.2c.34.1.68.16 1.03.16.5 0 .99-.05 1.47-.14a4.59 4.59 0 001.63-2.126 4.74 4.74 0 011.23-4.63 6.92 6.92 0 014.95 2.48c-.2.32-.45.67-.7 1.01l-.2.34a9 9 0 01-2.85 3.16 4.5 4.5 0 001.98-.9 2.4 2.4 0 01-.54.503 2.4 2.4 0 00.68 1.92A6.7 6.7 0 010 15.41a9.5 9.5 0 004.88 1.41 13.56 13.56 0 009.44-4.47c-.02-.31-.05-.62-.05-.94 0-2.26 1.83-4.1 4.1-4.1 1.16 0 2.23.41 3.02 1.11.61-.15 1.2-.35 1.77-.61.25-.79.4-1.68.4-2.6 0-.9-.32-1.7-.9-2.4A5.15 5.15 0 0024 2.8c-1.2.5-2.48.8-3.8.8-.27 0-.54-.02-.8-.04 1.33-.41 2.5-1.1 3.37-2.1.76-.95 1.23-2.1 1.23-3.37 0-.81-.2-1.57-.6-2.27.6-.26 1.18-.59 1.66-1.02.46-.42.8-1 .98-1.6.18-.57.18-1.16 0-1.74A5.17 5.17 0 0022 1c-.62 1.7-1.9 3.15-3.76 3.68a3.76 3.76 0 01-2.91-1.1c.43-.97.68-2.03.68-3.16 0-.94-.23-1.8-.66-2.55A13.57 13.57 0 0012 3.11c-.87.36-1.77.58-2.7.58-.8 0-1.57-.19-2.27-.55v.06c0 2.6 1.9 4.77 4.4 5.24a2.38 2.38 0 01-1.31.3c-.33 0-.65-.04-.96-.11.65 2.03 2.54 3.69 4.95 3.73-1.82 1.44-4.11 2.3-6.55 2.3-.43 0-.85-.02-1.26-.06 2.32 1.5 5.07 2.37 7.9 2.37 9.52 0 14.7-7.9 14.7-14.7 0-.22 0-.44-.01-.66.83-.6 1.54-1.35 2.2-2.15.77-.3 1.49-.72 2.17-1.19"/></svg>, href: 'https://youtube.com/@viztr' },
                    ].map((social, i) => (
                      <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-bg-secondary hover:bg-accent hover:text-white transition-colors" aria-label={social.href}>{social.icon}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}