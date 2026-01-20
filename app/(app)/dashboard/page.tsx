"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Mic, PlayCircle, Plus, ArrowUpRight, Clock, Users } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#005461] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 relative overflow-hidden">
        {/* Subtle Background atmosphere for light theme */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00B7B5]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#005461]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 p-8 md:p-12 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h1 className="text-4xl font-heading font-bold text-[#005461] mb-2 tracking-tight">Mission Control</h1>
              <p className="text-gray-500 text-lg">Welcome back, Buzz. Here's what's happening with your audio.</p>
            </div>
            <Button className="bg-[#005461] hover:bg-[#018790] text-white font-bold shadow-xl shadow-[#005461]/10 transition-all gap-2 h-12 px-6 rounded-xl">
              <Plus size={18} /> Connect New Blog
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Total Plays", value: "12,543", trend: "+15%", icon: PlayCircle },
              { title: "Voice Comments", value: "342", trend: "+5 new", icon: Mic },
              { title: "Avg. Listen Time", value: "4m 12s", trend: "+30s", icon: Clock },
              { title: "Active Listeners", value: "1.2k", trend: "+8%", icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-[2rem] p-6 hover:shadow-xl hover:shadow-[#005461]/5 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-1 text-[#00B7B5] group-hover:scale-110 transition-transform">
                    <stat.icon size={28} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-bold bg-gray-50 px-2 py-1 rounded-lg text-gray-500 flex items-center gap-1 border border-gray-100">
                    {stat.trend} <ArrowUpRight size={12} />
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-[0.15em]">{stat.title}</h3>
                  <p className="text-3xl font-heading font-bold text-[#005461]">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Connected Blogs Table */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-heading font-bold text-[#005461]">Connected Blogs</h2>
                <button className="text-sm font-bold text-[#00B7B5] hover:text-[#005461] transition-colors">Manage All</button>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50/50 text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                    <tr>
                      <th className="px-8 py-4">Blog Name</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Audio Posts</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#005461] flex items-center justify-center text-white font-bold">
                              B
                            </div>
                            <div>
                               <p className="font-bold text-[#005461] group-hover:text-[#00B7B5] transition-colors">Buzz's Tech Blog</p>
                               <p className="text-xs text-gray-400 font-mono">buzz.hashnode.dev</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-wider border border-green-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Live
                          </span>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2 font-mono">
                              <span className="font-bold text-[#005461]">24</span>
                              <span className="text-gray-300">/</span>
                              <span className="text-gray-400">24</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-gray-300 hover:text-[#00B7B5] transition-colors p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-100 shadow-sm transition-all">
                            <ArrowUpRight size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 flex flex-col shadow-sm">
              <h2 className="text-xl font-heading font-bold text-[#005461] mb-8">Live Feed</h2>
              <div className="space-y-8">
                {[
                  { user: "Sarah J.", action: "left a voice comment", time: "2m ago", icon: Mic },
                  { user: "Mike T.", action: "listened to your post", time: "15m ago", icon: PlayCircle },
                  { user: "System", action: "converted 'Next.js 15'", time: "1h ago", icon:  BarChart3 },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start relative pl-6 border-l-2 border-gray-100 pb-2 last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-gray-200" />
                    <div className="text-[#00B7B5] pt-0.5">
                      <item.icon size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 leading-tight"><span className="font-bold text-[#005461]">{item.user}</span> {item.action}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1.5 flex items-center gap-1 font-mono">
                         <Clock size={10} /> {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="mt-10 w-full border border-gray-100 text-gray-400 hover:text-[#005461] hover:bg-gray-50 rounded-xl text-xs font-bold uppercase tracking-widest">
                 View all activity
              </Button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}