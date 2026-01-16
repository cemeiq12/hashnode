"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rss, Mic, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
             if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
             }
          }
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Connect Your Blog",
      desc: "Link your Hashnode blog in one click. We handshake with the GraphQL API to index your posts instantly.",
      icon: <Rss size={48} className="text-white" />,
      gradient: "from-[#005461] to-[#003840]",
      shadow: "shadow-[#005461]/30",
    },
    {
      id: 2,
      title: "AI Audio Conversion",
      desc: "Our ElevenLabs integration synthesizes your text into natural, human-like speech with perfect intonation.",
      icon: <Layers size={48} className="text-white" />,
      gradient: "from-[#018790] to-[#006066]",
      shadow: "shadow-[#018790]/30",
    },
    {
      id: 3,
      title: "Embed & Engage",
      desc: "Drop the player into your posts. Readers can listen on-the-go and leave voice comments that sync back.",
      icon: <Mic size={48} className="text-white" />,
      gradient: "from-[#00B7B5] to-[#008F8D]",
      shadow: "shadow-[#00B7B5]/30",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#F4F4F4]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex h-screen w-[300vw] flex-row relative">
          
          {/* Progress Bar */}
          <div className="fixed bottom-0 left-0 h-1.5 bg-[#005461]/10 w-full z-50">
             <div ref={progressRef} className="h-full bg-[#00B7B5] w-0 transition-all duration-75 ease-linear" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-screen h-screen flex flex-col justify-center items-center p-8 relative border-r border-gray-200/50 ${index % 2 === 0 ? 'bg-[#F4F4F4]' : 'bg-white'}`}
            >
              {/* Giant Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-gray-900/[0.03] select-none pointer-events-none font-heading leading-none">
                {step.id}
              </div>

              <div className="max-w-xl text-center z-10 relative">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  className={`w-28 h-28 bg-gradient-to-br ${step.gradient} rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-2xl ${step.shadow} relative group`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </motion.div>
                
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#005461] mb-6 tracking-tight">
                  {step.title}
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
                  {step.desc}
                </p>

                {index < 2 && (
                   <div className="mt-12 text-[#00B7B5] flex items-center justify-center gap-2 font-medium opacity-50 animate-pulse">
                      Scroll to next <ArrowRight size={20} />
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
