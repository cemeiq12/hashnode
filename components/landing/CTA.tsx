"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#001E23]">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#00B7B5] blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#005461] blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }} />
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B7B5]/30 bg-[#00B7B5]/10 text-[#00B7B5] mb-8 backdrop-blur-sm">
              <Sparkles size={16} />
              <span className="text-sm font-medium tracking-wide">Limited Free Access for Beta</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Stop writing into the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7B5] via-white to-[#00B7B5] bg-[200%_auto] animate-text-shimmer">
                silent void.
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 1,000+ creators who are turning their silent readers into active listeners today. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="h-16 px-10 rounded-2xl bg-[#00B7B5] text-[#001E23] hover:bg-[#F4F4F4] text-lg font-bold shadow-[0_0_40px_-10px_rgba(0,183,181,0.5)] hover:shadow-[0_0_60px_-10px_rgba(0,183,181,0.8)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Free
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="h-16 px-8 rounded-2xl text-white hover:bg-white/5 border border-white/10 text-lg font-medium group"
              >
                Read the Manifesto 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Proof Avatars */}
            <div className="mt-16 flex flex-col items-center gap-4">
               <div className="flex -space-x-4">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#001E23] bg-gray-700 flex items-center justify-center text-xs font-bold text-white overflow-hidden relative shadow-lg z-${10-i}`}>
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-[#001E23] bg-[#00B7B5] flex items-center justify-center text-xs font-bold text-[#001E23] z-0">
                     +1k
                  </div>
               </div>
               <p className="text-sm text-gray-500 font-mono">Trusted by top Hashnode writers</p>
            </div>

          </motion.div>
        </div>
      </div>
      
      {/* CSS for Text Shimmer Animation */}
      <style jsx global>{`
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};