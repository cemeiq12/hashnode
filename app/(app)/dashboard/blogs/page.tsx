"use client";

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Plus, Settings, ExternalLink, RefreshCw, MoreVertical, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#005461] flex">
      <Sidebar />

      <main className="flex-1 md:ml-64 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00B7B5]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 p-8 md:p-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-heading font-bold text-[#005461] mb-2 tracking-tight">My Blogs</h1>
              <p className="text-gray-500 text-lg">Manage your connected Hashnode publications.</p>
            </div>
            <Button className="bg-[#005461] hover:bg-[#018790] text-white font-bold shadow-xl shadow-[#005461]/10 transition-all gap-2 h-12 px-6 rounded-xl">
              <Plus size={18} /> Connect Publication
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Card */}
            {[1, 2].map((blog) => (
              <motion.div 
                key={blog}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6 relative z-10">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#005461] to-[#003840] flex items-center justify-center text-white font-bold text-xl shadow-md">
                      B
                   </div>
                   <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-[#005461] transition-colors">
                      <MoreVertical size={20} />
                   </button>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#005461] mb-1">Buzz's Tech Blog</h3>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00B7B5] flex items-center gap-1 mb-6 transition-colors">
                   buzz.hashnode.dev <ExternalLink size={12} />
                </a>

                <div className="space-y-3 mb-8">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Audio Posts</span>
                      <span className="font-bold text-[#005461]">24</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Voice Comments</span>
                      <span className="font-bold text-[#005461]">142</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Auto-Sync</span>
                      <span className="flex items-center gap-1.5 text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> On
                      </span>
                   </div>
                </div>

                <div className="flex gap-3 border-t border-gray-100 pt-6">
                   <Button variant="outline" className="flex-1 border-gray-200 hover:border-[#00B7B5] hover:text-[#00B7B5] gap-2 rounded-xl">
                      <Settings size={16} /> Settings
                   </Button>
                   <Button variant="outline" className="flex-1 border-gray-200 hover:border-[#00B7B5] hover:text-[#00B7B5] gap-2 rounded-xl">
                      <RefreshCw size={16} /> Sync
                   </Button>
                </div>
              </motion.div>
            ))}

            {/* Add New Placeholder */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="border-2 border-dashed border-gray-200 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:border-[#00B7B5]/50 hover:bg-[#00B7B5]/5 transition-all cursor-pointer min-h-[300px] group"
            >
               <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 mb-4 group-hover:scale-110 group-hover:text-[#00B7B5] transition-all shadow-sm">
                  <Plus size={32} />
               </div>
               <h3 className="text-lg font-bold text-gray-400 group-hover:text-[#005461] transition-colors">Connect Another Blog</h3>
               <p className="text-sm text-gray-400 mt-2 max-w-[200px]">Add another Hashnode publication to manage its audio.</p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
