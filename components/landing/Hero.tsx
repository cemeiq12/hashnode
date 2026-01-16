"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AudioPlayer } from '@/components/player/AudioPlayer';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  // Mouse move effect for background blobs
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  }

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F4F4F4] pt-20"
    >
      {/* Background Waveform - Animated */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none w-full h-full">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="waveform-pattern" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M0 20 Q25 40 50 20 T100 20" 
                fill="none" 
                stroke="#005461" 
                strokeWidth="1.5"
                animate={{ 
                  d: [
                    "M0 20 Q25 40 50 20 T100 20",
                    "M0 20 Q25 0 50 20 T100 20",
                    "M0 20 Q25 40 50 20 T100 20"
                  ] 
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#waveform-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-12 gap-12 items-center relative w-full">
        
        {/* Text Content - Spans 7 cols */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative z-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="h-px w-8 bg-[#005461]/30" />
               <span className="font-mono text-xs font-medium tracking-[0.2em] text-[#00B7B5] uppercase">
                 Amplify Hashnode Creators
               </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-heading text-[#005461] tracking-tight leading-[0.9] mb-8">
              Read less. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7B5] to-[#018790]">
                Listen more.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
              Turn your static Hashnode blog into an immersive audio experience. Engage readers with voice comments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" className="h-14 px-8 rounded-full bg-[#005461] text-white hover:bg-[#018790] text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Connect Blog <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 rounded-full text-[#005461] hover:bg-[#005461]/5 text-lg font-medium group">
                <PlayCircle className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform text-[#00B7B5]" /> 
                See how it works
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Visual Content - Spans 5 cols + Overlap */}
        <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end">
          {/* Main Floating Card */}
          <motion.div 
            style={{ y: y1, rotateX: rotate }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] perspective-1000 z-10"
          >
            {/* Glassmorphism Card */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-2xl shadow-[#005461]/10">
               {/* Abstract decorative elements inside card */}
               <div className="absolute top-0 right-0 p-6 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <circle cx="20" cy="20" r="18" stroke="#005461" strokeWidth="2"/>
                     <path d="M20 10V30M10 20H30" stroke="#005461" strokeWidth="2"/>
                  </svg>
               </div>

              <div className="mb-8">
                 <div className="h-2 w-20 bg-gray-200 rounded-full mb-4" />
                 <h3 className="text-2xl font-heading font-bold text-[#005461] leading-tight mb-2">The Architecture of Modern Voice Apps</h3>
                 <p className="text-sm text-gray-500 font-sans">By Buzz • 5 min read</p>
              </div>

              <AudioPlayer 
                src="/demo.mp3" 
                title="Audio Version" 
                className="shadow-lg border border-white/50 bg-white/80"
              />
            </div>

            {/* Floating Secondary Element - Voice Comment */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#00B7B5] flex items-center justify-center text-white text-xs font-bold">
                  JS
                </div>
                <div>
                  <p className="text-xs font-bold text-[#005461]">Jane Smith</p>
                  <p className="text-[10px] text-gray-400">Voice Comment • 2m ago</p>
                </div>
              </div>
              <div className="h-6 w-full bg-gray-100 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-[#00B7B5]/30" />
                 {/* Fake waveform bars */}
                 <div className="flex items-center justify-center gap-0.5 h-full px-2">
                    {[...Array(15)].map((_, i) => (
                       <div key={i} className="w-1 bg-[#005461]/20 rounded-full" style={{ height: `${Math.random() * 80 + 20}%`}} />
                    ))}
                 </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};