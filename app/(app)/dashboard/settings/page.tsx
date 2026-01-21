"use client";

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Mail, Lock, Bell, Shield, Save } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#005461] flex">
      <Sidebar />

      <main className="flex-1 md:ml-64 relative overflow-hidden">
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00B7B5]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 p-8 md:p-12 max-w-5xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-heading font-bold text-[#005461] mb-2 tracking-tight">Account Settings</h1>
            <p className="text-gray-500 text-lg">Manage your profile and preferences.</p>
          </div>

          <div className="space-y-8">
            {/* Profile Hero Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00B7B5]/10 to-transparent rounded-bl-full -mr-10 -mt-10" />
               
               <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#005461] to-[#00B7B5]">
                     <div className="w-full h-full rounded-full bg-white border-4 border-white overflow-hidden relative">
                        <img 
                           src="https://api.dicebear.com/7.x/avataaars/svg?seed=Buzz" 
                           alt="Profile" 
                           className="w-full h-full object-cover"
                        />
                        <button className="absolute bottom-0 right-0 bg-[#005461] text-white p-2 rounded-full hover:bg-[#00B7B5] transition-colors shadow-lg border-2 border-white">
                           <User size={14} />
                        </button>
                     </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                     <h2 className="text-3xl font-heading font-bold text-[#005461] mb-1">Buzz Lightyear</h2>
                     <p className="text-gray-400 font-mono text-sm mb-4">buzz@starcommand.com • Member since 2026</p>
                     <div className="flex gap-3 justify-center md:justify-start">
                        <span className="px-3 py-1 rounded-full bg-[#00B7B5]/10 text-[#00B7B5] text-xs font-bold uppercase tracking-wider border border-[#00B7B5]/20">
                           Pro Plan
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider border border-gray-200">
                           Verified
                        </span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-3 min-w-[140px]">
                     <Button variant="outline" className="border-gray-200 hover:border-[#005461] hover:text-[#005461]">
                        Change Avatar
                     </Button>
                     <Button variant="ghost" className="text-red-400 hover:text-red-500 hover:bg-red-50">
                        Delete Profile
                     </Button>
                  </div>
               </div>
            </motion.div>

            {/* Forms Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               
               {/* Personal Info */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 }}
                 className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex flex-col h-full"
               >
                  <div className="flex items-center gap-3 mb-8">
                     <div className="text-[#00B7B5]">
                        <User size={24} strokeWidth={2.5} />
                     </div>
                     <h3 className="text-lg font-bold text-[#005461]">Personal Information</h3>
                  </div>
                  
                  <div className="space-y-5 flex-1">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">First Name</label>
                           <Input defaultValue="Buzz" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Last Name</label>
                           <Input defaultValue="Lightyear" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                        <Input defaultValue="buzz@starcommand.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Bio</label>
                        <textarea className="flex min-h-[100px] w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B7B5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none" defaultValue="To infinity and beyond! Exploring the universe one audio blog at a time." />
                     </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                     <Button className="bg-[#005461] hover:bg-[#018790] text-white rounded-xl px-6 gap-2">
                        <Save size={16} /> Save Changes
                     </Button>
                  </div>
               </motion.div>

               {/* Security & Preferences */}
               <div className="space-y-8 flex flex-col">
                  {/* Password */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex-1"
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="text-[#00B7B5]">
                           <Shield size={24} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-lg font-bold text-[#005461]">Security</h3>
                     </div>
                     
                     <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-gray-200 text-[#005461] hover:border-[#005461]">
                           <span>Change Password</span>
                           <Lock size={16} className="text-gray-400" />
                        </Button>
                        <Button variant="outline" className="w-full justify-between h-12 rounded-xl border-gray-200 text-[#005461] hover:border-[#005461]">
                           <span>Enable 2FA</span>
                           <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded font-bold">Enabled</span>
                        </Button>
                     </div>
                  </motion.div>

                  {/* Notifications */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-sm flex-1"
                  >
                     <div className="flex items-center gap-3 mb-6">
                        <div className="text-[#00B7B5]">
                           <Bell size={24} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-lg font-bold text-[#005461]">Notifications</h3>
                     </div>
                     
                     <div className="space-y-4">
                        {["New voice comments", "Weekly digest", "Product updates"].map((item, i) => (
                           <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                              <span className="text-sm font-medium text-gray-600 group-hover:text-[#005461]">{item}</span>
                              <div className="w-10 h-6 bg-[#005461] rounded-full relative cursor-pointer">
                                 <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
