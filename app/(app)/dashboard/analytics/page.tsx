"use client";

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, Clock, Headphones, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#005461] flex">
      <Sidebar />

      <main className="flex-1 md:ml-64 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00B7B5]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 p-8 md:p-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-4xl font-heading font-bold text-[#005461] mb-2 tracking-tight">Audio Analytics</h1>
              <p className="text-gray-500 text-lg">Deep dive into your audience engagement.</p>
            </div>
            <div className="flex gap-3">
               <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-sm font-bold text-[#005461] flex items-center gap-2">
                  Last 30 Days
               </div>
               <Button variant="outline" className="border-gray-200 gap-2 h-10 rounded-xl">
                  <Download size={16} /> Export
               </Button>
            </div>
          </div>

          {/* Main Chart Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-[2.5rem] p-8 mb-10 shadow-sm relative overflow-hidden"
          >
             <div className="flex justify-between items-start mb-8">
                <div>
                   <h3 className="text-xl font-heading font-bold text-[#005461]">Listen Trends</h3>
                   <p className="text-sm text-gray-400">Total plays across all publications</p>
                </div>
                <div className="flex items-center gap-4 text-sm font-bold">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#00B7B5]" />
                      <span>Plays</span>
                   </div>
                   <div className="flex items-center gap-2 text-gray-300 font-normal">
                      <div className="w-3 h-3 rounded-full bg-gray-200" />
                      <span>Previous Period</span>
                   </div>
                </div>
             </div>

             {/* Simulated Chart */}
             <div className="h-64 w-full flex items-end gap-2 relative">
                {[...Array(30)].map((_, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 80 + 20}%` }}
                        transition={{ delay: i * 0.02, duration: 0.8 }}
                        className="w-full bg-[#00B7B5]/10 group-hover:bg-[#00B7B5] rounded-t-lg transition-colors relative"
                      >
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#005461] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {Math.floor(Math.random() * 500 + 100)} plays
                         </div>
                      </motion.div>
                   </div>
                ))}
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                   <div className="w-full h-px bg-[#005461]" />
                   <div className="w-full h-px bg-[#005461]" />
                   <div className="w-full h-px bg-[#005461]" />
                   <div className="w-full h-px bg-[#005461]" />
                </div>
             </div>
             <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Jan 01</span>
                <span>Jan 15</span>
                <span>Jan 30</span>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
             {/* Key Metrics */}
             <div className="space-y-6">
                {[
                   { label: "Completion Rate", value: "78%", trend: "+2.4%", up: true, icon: Headphones },
                   { label: "Avg. Engagement", value: "4m 12s", trend: "-12s", up: false, icon: Clock },
                   { label: "New Listeners", value: "1,432", trend: "+12%", up: true, icon: Users },
                ].map((metric, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 + (i * 0.1) }}
                     className="bg-white border border-gray-200 rounded-[2rem] p-6 shadow-sm flex items-center justify-between group hover:border-[#00B7B5]/50 transition-all"
                   >
                      <div className="flex items-center gap-4">
                         <div className="text-[#00B7B5] group-hover:scale-110 transition-transform">
                            <metric.icon size={24} strokeWidth={2.5} />
                         </div>
                         <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{metric.label}</p>
                            <p className="text-2xl font-heading font-bold text-[#005461]">{metric.value}</p>
                         </div>
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-bold ${metric.up ? 'text-green-500' : 'text-red-400'}`}>
                         {metric.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                         {metric.trend}
                      </div>
                   </motion.div>
                ))}
             </div>

             {/* Top Performing Posts */}
             <div className="lg:col-span-2 bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-[#005461] mb-8">Popular Episodes</h3>
                <div className="space-y-6">
                   {[
                      { title: "Building Scale with React Server Components", plays: "2.4k", duration: "12:45" },
                      { title: "My 2026 Tech Stack Reveal", plays: "1.8k", duration: "08:20" },
                      { title: "The Future of Web Dev with AI", plays: "1.2k", duration: "15:10" },
                   ].map((post, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-6 last:border-0 last:pb-0">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xs font-bold text-[#005461] group-hover:bg-[#00B7B5] group-hover:text-white transition-all">
                               0{i + 1}
                            </div>
                            <div>
                               <h4 className="font-bold text-[#005461] group-hover:text-[#00B7B5] transition-colors">{post.title}</h4>
                               <p className="text-xs text-gray-400 font-mono">{post.duration} duration</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-sm font-bold text-[#005461]">{post.plays}</p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">PLAYS</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
