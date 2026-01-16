"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, Sparkles, Clock, CheckCircle2, CircleDashed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Wishlist = () => {
  const [votedItems, setVotedItems] = useState<number[]>([]);

  const toggleVote = (index: number) => {
    if (votedItems.includes(index)) {
      setVotedItems(votedItems.filter(i => i !== index));
    } else {
      setVotedItems([...votedItems, index]);
    }
  };

  const roadmap = [
    { 
      status: "In Progress", 
      icon: Clock,
      items: [
        { title: "Spotify Integration", votes: 1240, tags: ["Integration"] },
        { title: "Multi-Language Dubbing", votes: 750, tags: ["AI"] }
      ]
    },
    { 
      status: "Up Next", 
      icon: CircleDashed,
      items: [
        { title: "AI Summaries", votes: 890, tags: ["Content"] },
        { title: "Custom Intro Music", votes: 620, tags: ["Branding"] }
      ]
    },
    { 
      status: "Future", 
      icon: Sparkles,
      items: [
        { title: "Monetization Tools", votes: 1540, tags: ["Revenue"] },
        { title: "Guest Interviews", votes: 430, tags: ["Collaboration"] }
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#001E23] border-t border-white/5 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-[#00B7B5]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#005461]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B7B5]/10 text-[#00B7B5] text-xs font-bold uppercase tracking-widest mb-6 border border-[#00B7B5]/20"
              >
                 <span className="w-2 h-2 rounded-full bg-[#00B7B5] animate-pulse" />
                 Public Roadmap
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                 Building in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B7B5] to-[#018790]">public.</span>
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                 See what we're working on and vote for the features you need most.
              </p>
           </div>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {roadmap.map((col, colIndex) => (
              <motion.div 
                key={col.status}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                 <div className="flex items-center gap-3 pb-4 border-b border-[#00B7B5]/20">
                    <col.icon size={20} className="text-[#00B7B5]" />
                    <h3 className="text-lg font-bold text-white/90 tracking-tight">{col.status}</h3>
                 </div>

                 <div className="space-y-4">
                    {col.items.map((item, itemIndex) => {
                       const globalIndex = colIndex * 10 + itemIndex;
                       const isVoted = votedItems.includes(globalIndex);
                       
                       return (
                          <motion.div 
                            key={item.title}
                            whileHover={{ y: -4 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group relative overflow-hidden cursor-pointer"
                            onClick={() => toggleVote(globalIndex)}
                          >
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#00B7B5]/0 group-hover:bg-[#00B7B5] transition-colors" />
                             
                             <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map(tag => (
                                   <span key={tag} className="text-[10px] font-bold text-[#00B7B5]/60 bg-[#00B7B5]/5 px-2 py-0.5 rounded border border-[#00B7B5]/10">
                                      {tag}
                                   </span>
                                ))}
                             </div>
                             
                             <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#00B7B5] transition-colors">
                                {item.title}
                             </h4>

                             <div className="flex justify-between items-center">
                                <div className={`flex items-center gap-2 transition-colors ${isVoted ? 'text-[#00B7B5]' : 'text-white/40 group-hover:text-[#00B7B5]'}`}>
                                   <ThumbsUp size={16} className={isVoted ? 'fill-current' : ''} strokeWidth={2.5} />
                                   <span className="font-mono text-sm font-bold">
                                      {item.votes + (isVoted ? 1 : 0)}
                                   </span>
                                </div>
                                {col.status === "In Progress" && (
                                   <div className="w-1.5 h-1.5 rounded-full bg-[#00B7B5] animate-pulse" />
                                )}
                             </div>
                          </motion.div>
                       );
                    })}
                 </div>
              </motion.div>
           ))}
        </div>

        {/* Signup CTA Banner */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-gradient-to-r from-[#005461] to-[#003840] rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10 relative overflow-hidden shadow-2xl"
        >
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
           <div className="absolute right-0 top-0 w-96 h-96 bg-[#00B7B5]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
           
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-heading font-bold text-white mb-4 leading-tight">
                 Shape the future.
              </h3>
              <p className="text-white/60 text-lg">
                 Subscribe to get notified about new features and voting periods.
              </p>
           </div>
           
           <div className="relative z-10 w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00B7B5] focus:bg-white/10 transition-all min-w-[300px]"
                 />
                 <Button className="bg-[#00B7B5] hover:bg-[#009b99] text-[#001E23] font-bold h-14 px-8 rounded-2xl shadow-lg shadow-[#00B7B5]/20">
                    Subscribe
                 </Button>
              </form>
              <p className="text-white/30 text-xs mt-4 flex items-center justify-center md:justify-start gap-2">
                 <CheckCircle2 size={12} className="text-[#00B7B5]" /> No spam, just progress.
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
