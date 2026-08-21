'use client';

import Link from 'next/link';
import { Camera, Briefcase, Send, Play, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-[#2a2a2a] pt-[2.5rem] pb-[1.5rem] shrink-0 min-h-[240px]">
      <div className="max-w-[1280px] mx-auto px-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Column 1 */}
          <div>
            <Link href="/" className="font-display font-bold text-xl mb-3 block">
              VizTR
            </Link>
            <p className="text-[var(--text-secondary)] text-xs leading-relaxed max-w-[280px]">
              Modern architecture visualization meets advanced XR exploration. Built for the future.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Studio</h4>
            <ul className="flex flex-col gap-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/studio/exterior" className="hover:text-white transition-colors">Exterior Viz</Link></li>
              <li><Link href="/studio/interior" className="hover:text-white transition-colors">Interior Viz</Link></li>
              <li><Link href="/studio/walkthrough" className="hover:text-white transition-colors">Walkthroughs</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">XR World</h4>
            <ul className="flex flex-col gap-2 text-xs text-[var(--text-secondary)]">
              <li><Link href="/xr-world/webxr" className="hover:text-white transition-colors">WebXR & WebAR</Link></li>
              <li><Link href="/xr-world/virtual-reality" className="hover:text-white transition-colors">Virtual Reality</Link></li>
              <li><Link href="/xr-world/pixel-streaming" className="hover:text-white transition-colors">Pixel Streaming</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Connect</h4>
            <p className="text-xs text-[var(--text-secondary)] mb-4">hello@viztr.com</p>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-[#2a2a2a]"></div>
              <div className="w-6 h-6 rounded bg-[#2a2a2a]"></div>
              <div className="w-6 h-6 rounded bg-[#2a2a2a]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#666]">
          <p>© 2026 VizTR. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
