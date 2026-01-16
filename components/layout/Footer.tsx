"use client";

import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Disc, ArrowUpRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export const Footer = () => {
  return (
    <footer className="relative bg-[#001E23] text-off-white overflow-hidden pt-32 pb-8">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#005461]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Newsletter Card */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-full hover:border-[#00B7B5]/50 transition-colors duration-500">
            <div>
              <h3 className="text-3xl font-heading font-medium text-white mb-2">Stay synced</h3>
              <p className="text-white/40 mb-8">Get the latest updates on audio features and creator tools directly to your inbox.</p>
            </div>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#00B7B5] transition-all"
              />
              <Button className="w-full bg-[#00B7B5] text-[#001E23] hover:bg-white rounded-xl py-6 font-bold text-lg shadow-lg shadow-[#00B7B5]/20">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
             {/* Column 1 */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <span className="text-[#00B7B5] font-mono text-xs mb-4">PRODUCT</span>
                <Link href="/#features" className="text-white/60 hover:text-white transition-colors">Features</Link>
                <Link href="/#how-it-works" className="text-white/60 hover:text-white transition-colors">How it Works</Link>
                <Link href="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link>
             </div>
             
             {/* Column 2 */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <span className="text-[#00B7B5] font-mono text-xs mb-4">RESOURCES</span>
                <Link href="/docs" className="text-white/60 hover:text-white transition-colors">Documentation</Link>
                <Link href="/docs" className="text-white/60 hover:text-white transition-colors">API Reference</Link>
                <Link href="/community" className="text-white/60 hover:text-white transition-colors">Community</Link>
             </div>

             {/* Column 3 - Socials */}
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-colors col-span-2 md:col-span-1">
                <span className="text-[#00B7B5] font-mono text-xs mb-4">SOCIAL</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#00B7B5] transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="hover:text-[#00B7B5] transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-[#00B7B5] transition-colors"><Linkedin size={20} /></a>
                </div>
                <div className="mt-auto pt-8">
                   <div className="flex items-center gap-2 text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      ALL SYSTEMS OPERATIONAL
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 pb-4">
           <div className="flex flex-col gap-4">
              <Link href="/" className="mb-2">
                 <Logo light iconOnly className="w-10 h-10 opacity-50 hover:opacity-100 transition-opacity" />
              </Link>
              <div className="flex items-center gap-2 text-white/30 text-xs">
                 <Cpu size={14} />
                 <span>Powered by Hashnode GraphQL API</span>
              </div>
              <div className="flex gap-6 text-sm text-white/40 font-medium">
                 <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                 <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                 <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
           </div>

           <div className="mt-12 md:mt-0 text-[12vw] md:text-[14vw] leading-[0.8] font-bold font-heading text-white/5 select-none pointer-events-none tracking-tighter">
              VoiceNode
           </div>
        </div>
      </div>
    </footer>
  );
};
