import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'VizTR Terms and Conditions — Governing the use of our website, services, and platform.',
}

export default function TermsConditionsPage() {
  const lastUpdated = 'January 2026'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Terms and Conditions</h1>
              <p className="text-text-secondary">Last updated: {lastUpdated}</p>
            </header>

            <div className="prose prose-lg text-text-secondary space-y-8">
              <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using the VizTR website, services, and platform ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you may not use our Services.</p>
              </section>

              <section>
                <h2>2. Services Provided</h2>
                <p>VizTR provides architectural visualization services and immersive XR experiences, including but not limited to:</p>
                <ul>
                  <li>Exterior and interior architectural visualization</li>
                  <li>Walkthrough and cinematic animations</li>
                  <li>WebXR, WebAR, and Virtual Reality experiences</li>
                  <li>360° virtual tours</li>
                  <li>Pixel Streaming cloud-rendered experiences</li>
                  <li>Project tracking and client portal access</li>
                </ul>
                <p>The specific scope of services is defined in each project proposal or agreement.</p>
              </section>

              <section>
                <h2>3. Payment Terms</h2>
                <ul>
                  <li>Project pricing is provided in written proposals or agreements</li>
                  <li>Deposit of 50% required upon project initiation unless otherwise agreed</li>
                  <li>Progress payments may be scheduled for longer projects</li>
                  <li>Final payment due upon delivery of completed deliverables</li>
                  <li>Late payments may incur interest at 1.5% per month</li>
                  <li>All prices are in USD unless otherwise specified</li>
                </ul>
              </section>

              <section>
                <h2>4. Intellectual Property</h2>
                <ul>
                  <li>VizTR retains all rights to its proprietary tools, workflows, and methodologies</li>
                  <li>Client receives a license to use delivered assets for the purposes defined in the project agreement</li>
                  <li>Source files, project files, and raw assets remain VizTR property unless separately licensed</li>
                  <li>VizTR may use project renders and case studies for marketing with client approval</li>
                  <li>Client grants VizTR license to use provided reference materials for project execution</li>
                </ul>
              </section>

              <section>
                <h2>5. Revisions and Approvals</h2>
                <ul>
                  <li>Each project includes a defined number of revision rounds (typically 2)</li>
                  <li>Additional revisions beyond the agreed scope are billed at hourly rates</li>
                  <li>Client approval is required at key milestones before proceeding</li>
                  <li>Approval delays beyond 14 days may adjust project timeline and pricing</li>
                </ul>
              </section>

              <section>
                <h2>6. Delivery and Acceptance</h2>
                <ul>
                  <li>Deliverables are provided in agreed formats and resolutions</li>
                  <li>Client has 7 business days to review and request final revisions</li>
                  <li>Non-response within 14 days constitutes acceptance</li>
                  <li>Final files delivered via secure cloud link or client portal</li>
                </ul>
              </section>

              <section>
                <h2>7. Limitation of Liability</h2>
                <ul>
                  <li>VizTR's total liability shall not exceed the total fees paid for the project</li>
                  <li>VizTR is not liable for indirect, incidental, or consequential damages</li>
                  <li>VizTR is not responsible for delays caused by client delays, force majeure, or third-party dependencies</li>
                  <li>Client is responsible for verifying deliverables meet their requirements</li>
                </ul>
              </section>

              <section>
                <h2>8. Confidentiality</h2>
                <ul>
                  <li>Both parties agree to keep project information confidential</li>
                  <li>Confidential information includes project details, pricing, methodologies, and trade secrets</li>
                  <li>Obligations survive project completion for 3 years</li>
                  <li>Exceptions: publicly available information, legally required disclosures</li>
                </ul>
              </section>

              <section>
                <h2>9. Termination</h2>
                <ul>
                  <li>Either party may terminate with 14 days written notice</li>
                  <li>Client pays for all work completed up to termination date</li>
                  <li>VizTR may terminate for non-payment or material breach after 7 days cure period</li>
                  <li>Rights and obligations that should survive termination will survive</li>
                </ul>
              </section>

              <section>
                <h2>10. Force Majeure</h2>
                <p>Neither party is liable for delays or failures due to events beyond reasonable control, including natural disasters, pandemics, government actions, or infrastructure failures.</p>
              </section>

              <section>
                <h2>11. Governing Law and Disputes</h2>
                <ul>
                  <li>These Terms are governed by the laws of the jurisdiction where VizTR is incorporated</li>
                  <li>Disputes will be resolved through good-faith negotiation first</li>
                  <li>If unresolved, disputes will be submitted to binding arbitration</li>
                  <li>Each party bears its own legal costs unless otherwise awarded</li>
                </ul>
              </section>

              <section>
                <h2>12. General Provisions</h2>
                <ul>
                  <li>These Terms constitute the entire agreement between the parties</li>
                  <li>No waiver of any term is effective unless in writing</li>
                  <li>If any provision is unenforceable, the remainder remains in effect</li>
                  <li>No assignment of rights without written consent</li>
                  <li>VizTR may update these Terms with 30 days notice</li>
                </ul>
              </section>

              <section>
                <h2>13. Contact Information</h2>
                <p>For questions about these Terms and Conditions, please contact:</p>
                <ul>
                  <li>Email: legal@viztr.com</li>
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