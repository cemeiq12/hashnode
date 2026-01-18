"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#001E23] relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#005461]/40 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#00B7B5]/20 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Floating Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/50 overflow-hidden">
           
           {/* Top Glow Line */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00B7B5] to-transparent opacity-50" />

           <div className="flex flex-col items-center text-center mb-10">
              <Link href="/" className="group mb-6">
                <Logo light iconOnly className="w-16 h-16" />
              </Link>
              <h1 className="text-3xl font-heading font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-white/50 text-sm">Sign in to your VoiceNode dashboard</p>
           </div>

           <div className="space-y-6">
              <button className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-3 text-white font-medium transition-all duration-300 group">
                 <Github size={20} className="text-white/70 group-hover:text-white" />
                 Continue with GitHub
              </button>

              <div className="relative flex items-center py-2">
                 <div className="flex-grow border-t border-white/10"></div>
                 <span className="flex-shrink-0 mx-4 text-white/30 text-xs uppercase tracking-widest">or</span>
                 <div className="flex-grow border-t border-white/10"></div>
              </div>

              <form className="space-y-4">
                 <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#00B7B5] ml-1 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00B7B5]/50 focus:bg-black/40 transition-all"
                    />
                 </div>
                 
                 <div className="space-y-1.5">
                    <div className="flex justify-between items-center px-1">
                       <label className="text-xs font-semibold text-[#00B7B5] uppercase tracking-wider">Password</label>
                       <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Forgot?</a>
                    </div>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full h-12 bg-black/20 border border-white/10 rounded-xl px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00B7B5]/50 focus:bg-black/40 transition-all"
                    />
                 </div>

                 <Button className="w-full h-12 bg-[#00B7B5] hover:bg-[#009b99] text-[#001E23] font-bold text-base rounded-xl mt-2 shadow-[0_0_20px_-5px_rgba(0,183,181,0.4)] hover:shadow-[0_0_30px_-5px_rgba(0,183,181,0.6)] transition-all">
                    Sign In <ArrowRight size={18} className="ml-2 opacity-80" />
                 </Button>
              </form>
           </div>

           <div className="mt-8 text-center">
              <p className="text-white/40 text-sm">
                 Don't have an account?{' '}
                 <Link href="/signup" className="text-white font-semibold hover:text-[#00B7B5] transition-colors">
                    Sign up
                 </Link>
              </p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
