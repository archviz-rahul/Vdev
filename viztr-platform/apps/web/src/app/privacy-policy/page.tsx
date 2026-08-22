import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'VizTR Privacy Policy — How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 2026'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Privacy Policy</h1>
              <p className="text-text-secondary">Last updated: {lastUpdated}</p>
            </header>

            <div className="prose prose-lg text-text-secondary space-y-8">
              <section>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul>
                  <li>Contact information (name, email, phone, company)</li>
                  <li>Project details and requirements</li>
                  <li>Account credentials (for client portal access)</li>
                  <li>Communication records</li>
                  <li>Payment and billing information</li>
                </ul>
                <p>We also collect certain information automatically when you use our website:</p>
                <ul>
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our visualization and XR services</li>
                  <li>Communicate with you about your projects</li>
                  <li>Process payments and manage billing</li>
                  <li>Send project updates and deliverables</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2>3. Information Sharing</h2>
                <p>We do not sell your personal information. We may share information with:</p>
                <ul>
                  <li>Service providers who assist with our operations (hosting, analytics, payment processing)</li>
                  <li>Project team members who need access to complete your project</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners in connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2>4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                <ul>
                  <li>Encryption in transit and at rest</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security assessments</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2>5. Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Enable certain functionality (client portal, forms)</li>
                  <li>Measure marketing effectiveness</li>
                </ul>
                <p>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
              </section>

              <section>
                <h2>6. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              <section>
                <h2>7. Data Retention</h2>
                <p>We retain your personal information only as long as necessary for the purposes outlined in this policy, or as required by law. Project data is retained for the duration of the project plus 7 years for legal and business purposes.</p>
              </section>

              <section>
                <h2>8. International Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
              </section>

              <section>
                <h2>9. Children's Privacy</h2>
                <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us.</p>
              </section>

              <section>
                <h2>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>
              </section>

              <section>
                <h2>11. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul>
                  <li>Email: privacy@viztr.com</li>
                  <li>Address: 123 Visualization Ave, Tech City</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}