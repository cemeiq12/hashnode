"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Zap, MessageSquare, Podcast, BarChart3, Radio, Globe, Headphones, Mic2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Features = () => {
  return (
    <section className="py-32 bg-[#F4F4F4]" id="features">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#005461]/5 border border-[#005461]/10 text-[#005461] text-sm font-medium mb-6">
             Feature Set
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#005461] mb-6 tracking-tight leading-[1.1]">
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7B5] to-[#018790]">
              Go Audio.
            </span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            VoiceNode isn't just a player. It's a complete audio publishing suite designed to transform your Hashnode blog into a podcasting powerhouse.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          
          {/* Main Large Feature */}
          <BentoCard 
            colSpan="md:col-span-4" 
            title="Instant TTS Conversion" 
            desc="Generate professional-grade audio from your blog posts in seconds using ElevenLabs AI. Support for 29 languages and 100+ voices."
            icon={<Zap size={40} className="text-[#00B7B5]" />}
            gradient="from-[#005461]/10 to-[#005461]/0"
          >
             <div className="absolute right-0 bottom-0 w-64 h-32 bg-gradient-to-l from-[#00B7B5]/10 to-transparent rounded-tl-[100px]" />
             {/* Fake Audio Waves */}
             <div className="flex items-end gap-1 absolute bottom-8 right-8 h-16">
                {[...Array(12)].map((_,i) => (
                   <motion.div 
                     key={i} 
                     className="w-2 bg-[#00B7B5]"
                     animate={{ height: [10, Math.random()*50+10, 10] }}
                     transition={{ repeat: Infinity, duration: 1, delay: i*0.1 }}
                   />
                ))}
             </div>
          </BentoCard>

          {/* Secondary Tall Feature */}
          <BentoCard 
            colSpan="md:col-span-2" 
            rowSpan="md:row-span-2"
            title="Voice Comments" 
            desc="Let readers reply with their voice. We transcribe it and sync it back to Hashnode comments."
            icon={<Mic2 size={40} className="text-[#00B7B5]" />}
            gradient="from-[#00B7B5]/10 to-transparent"
          >
             <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                 <div className="w-40 h-40 border border-[#005461] rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="w-28 h-28 border border-[#00B7B5] rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
             </div>
          </BentoCard>

          {/* Medium Feature */}
          <BentoCard 
            colSpan="md:col-span-2" 
            title="Podcast RSS Feeds" 
            desc="Every blog gets a dedicated RSS feed. Submit to Apple Podcasts & Spotify."
            icon={<Podcast size={32} className="text-gray-400 group-hover:text-[#00B7B5] transition-colors" />}
          />

          {/* Medium Feature */}
          <BentoCard 
            colSpan="md:col-span-2" 
            title="Analytics Dashboard" 
            desc="Track listen rates, drop-off points, and voice engagement stats."
            icon={<BarChart3 size={32} className="text-gray-400 group-hover:text-[#00B7B5] transition-colors" />}
          />

           {/* Small Feature Grid */}
           <BentoCard 
             colSpan="md:col-span-2"
             title="Global CDN" 
             desc="Lightning fast delivery."
             icon={<Globe size={24} className="text-[#005461]" />}
             small
           />
           <BentoCard 
             colSpan="md:col-span-2"
             title="Embeddable" 
             desc="Works on any site."
             icon={<Radio size={24} className="text-[#005461]" />}
             small
           />
           <BentoCard 
             colSpan="md:col-span-2"
             title="Custom Player" 
             desc="Match your branding."
             icon={<Headphones size={24} className="text-[#005461]" />}
             small
           />

        </motion.div>
      </div>
    </section>
  );
};

const BentoCard = ({ 
  colSpan, 
  rowSpan = "", 
  title, 
  desc, 
  icon, 
  children, 
  gradient = "",
  small = false
}: { 
  colSpan: string, 
  rowSpan?: string, 
  title: string, 
  desc: string, 
  icon: React.ReactNode, 
  children?: React.ReactNode,
  gradient?: string,
  small?: boolean
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className={cn(
        "group relative border border-gray-200 bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#005461]/5 transition-all duration-300",
        colSpan,
        rowSpan,
        small ? "p-6 flex items-center gap-4" : "p-8 md:p-10 flex flex-col justify-between h-full"
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 183, 181, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Subtle Background Gradient */}
      {gradient && <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />}

      <div className="relative z-10 w-full">
        <div className={cn("mb-6 w-14 h-14 rounded-2xl bg-[#F4F4F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300", small && "mb-0 w-12 h-12 shrink-0")}>
          {icon}
        </div>
        <div>
           <h3 className={cn("font-heading font-bold text-[#005461] mb-2", small ? "text-lg" : "text-2xl")}>{title}</h3>
           <p className={cn("text-gray-500 font-light", small ? "text-sm" : "text-base")}>{desc}</p>
        </div>
      </div>

      {children}
    </motion.div>
  );
};