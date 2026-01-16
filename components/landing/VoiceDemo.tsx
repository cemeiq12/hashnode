"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Play, Pause, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const VoiceDemo = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00B7B5]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#005461]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#005461]/5 text-[#005461] text-sm font-bold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Live Interaction
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-[#005461] mb-8 leading-tight">
            Give your readers a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7B5] to-[#018790]">
              real voice.
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
            Text comments are flat. VoiceNode lets your audience leave authentic, expressive 30-second voice notes. It's like a voicemail for your blog, but social.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { title: "Auto-Transcription", desc: "Every voice note is automatically converted to text for SEO and accessibility." },
              { title: "Moderation First", desc: "Review and approve audio comments before they go live on your site." },
              { title: "Seamless Sync", desc: "Works perfectly with your existing Hashnode comment system." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#F4F4F4] flex items-center justify-center shrink-0 group-hover:bg-[#00B7B5]/10 group-hover:text-[#00B7B5] transition-colors">
                  <BarChart2 size={24} className="text-gray-400 group-hover:text-[#00B7B5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#005461]">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo UI */}
        <div className="relative perspective-1000">
          <motion.div
             initial={{ opacity: 0, rotateY: 10, rotateX: 5 }}
             whileInView={{ opacity: 1, rotateY: 0, rotateX: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-[#005461]/10 border border-gray-100 p-8 md:p-10 max-w-md mx-auto"
          >
             {/* Chat Header */}
             <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00B7B5] to-[#005461]" />
                   <div>
                      <h4 className="font-bold text-[#005461]">Comments (3)</h4>
                      <p className="text-xs text-green-500 font-mono">● Online</p>
                   </div>
                </div>
                <div className="p-2 bg-gray-50 rounded-full text-gray-400">
                   <Mic size={20} />
                </div>
             </div>

             {/* Chat Bubbles */}
             <div className="space-y-6 mb-8">
                <ChatBubble 
                   name="Alex Chen" 
                   time="2h ago" 
                   text="This article completely changed my perspective on RSCs! Great work."
                   avatar="AC"
                />
                <VoiceBubble 
                   name="Sarah Jones" 
                   time="Just now" 
                   duration="0:24"
                />
             </div>

             {/* Input Area */}
             <div className="relative mt-4">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent -top-12 z-10" />
                <div className="relative z-20 bg-[#F4F4F4] rounded-2xl p-2 flex items-center gap-2 pr-4 shadow-inner">
                   <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#00B7B5]">
                      <Mic size={20} />
                   </div>
                   <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-[#00B7B5] animate-pulse" />
                   </div>
                   <Button size="icon" className="w-10 h-10 rounded-xl bg-[#005461] hover:bg-[#018790]">
                      <Send size={18} />
                   </Button>
                </div>
             </div>

             {/* Floating Reaction */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-50 text-2xl"
            >
               🔥
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ChatBubble = ({ name, time, text, avatar }: any) => (
  <div className="flex gap-3 items-start">
     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">
        {avatar}
     </div>
     <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
        <div className="flex justify-between items-baseline mb-1">
           <span className="text-xs font-bold text-[#005461]">{name}</span>
           <span className="text-[10px] text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
     </div>
  </div>
);

const VoiceBubble = ({ name, time, duration }: any) => {
   const [isPlaying, setIsPlaying] = useState(false);

   return (
     <div className="flex gap-3 items-start">
        <div className="w-8 h-8 rounded-full bg-[#00B7B5]/20 flex items-center justify-center text-xs font-bold text-[#005461] shrink-0">
           SJ
        </div>
        <div className="bg-gradient-to-br from-[#005461] to-[#018790] rounded-2xl rounded-tl-none p-4 w-full max-w-[85%] text-white shadow-lg shadow-[#005461]/20">
           <div className="flex justify-between items-baseline mb-3">
              <span className="text-xs font-bold text-white">{name}</span>
              <span className="text-[10px] text-white/60">{time}</span>
           </div>
           
           <div className="flex items-center gap-3">
              <button 
                 onClick={() => setIsPlaying(!isPlaying)}
                 className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                 {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" className="ml-0.5" />}
              </button>
              
              {/* Waveform Visualization */}
              <div className="flex-1 flex items-center gap-0.5 h-6">
                 {[...Array(20)].map((_, i) => (
                    <motion.div
                       key={i}
                       className="w-1 bg-white/40 rounded-full"
                       animate={isPlaying ? { height: [4, Math.random() * 20 + 4, 4] } : { height: 4 + Math.sin(i)*4 }}
                       transition={isPlaying ? { repeat: Infinity, duration: 0.5, delay: i * 0.05 } : { duration: 0 }}
                       style={{ height: isPlaying ? undefined : Math.max(4, 4 + Math.sin(i)*10) }}
                    />
                 ))}
              </div>
              
              <span className="text-xs font-mono text-white/80">{duration}</span>
           </div>
           
           <div className="mt-3 pt-3 border-t border-white/10 text-xs text-white/50 italic flex items-center gap-2">
              <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">TRANSCRIPT</span>
              Loving this new update! can't wait to...
           </div>
        </div>
     </div>
   );
};