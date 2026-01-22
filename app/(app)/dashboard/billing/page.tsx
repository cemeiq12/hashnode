"use client";

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { CreditCard, Check, Zap, Download, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BillingPage() {
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
            <h1 className="text-4xl font-heading font-bold text-[#005461] mb-2 tracking-tight">Billing & Usage</h1>
            <p className="text-gray-500 text-lg">Manage your subscription and track audio consumption.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Current Plan Card */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="lg:col-span-2 bg-[#001E23] text-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-2xl"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B7B5]/20 rounded-full blur-[80px] -mr-16 -mt-16" />
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-8">
                      <div>
                         <p className="text-[#00B7B5] font-bold text-sm uppercase tracking-widest mb-2">Current Plan</p>
                         <h2 className="text-4xl font-heading font-bold">Pro Creator</h2>
                         <p className="text-white/50 mt-1">$12/month • Billed monthly</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                         <span className="text-xs font-bold text-[#00B7B5] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00B7B5] animate-pulse" /> Active
                         </span>
                      </div>
                   </div>

                   <div className="space-y-6 mb-10">
                      <div>
                         <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/70">Audio Generation</span>
                            <span className="text-white font-bold">245 / 500 mins</span>
                         </div>
                         <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00B7B5] w-[49%] shadow-[0_0_10px_#00B7B5]" />
                         </div>
                      </div>
                      <div>
                         <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/70">Storage Used</span>
                            <span className="text-white font-bold">1.2 / 5 GB</span>
                         </div>
                         <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[24%]" />
                         </div>
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-4">
                      <Button className="bg-[#00B7B5] hover:bg-[#009b99] text-[#001E23] font-bold h-12 px-6 rounded-xl">
                         Upgrade Plan
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 px-6 rounded-xl">
                         Cancel Subscription
                      </Button>
                   </div>
                </div>
             </motion.div>

             {/* Payment Method */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between"
             >
                <div>
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl bg-[#00B7B5]/10 text-[#00B7B5]">
                         <CreditCard size={24} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-xl font-bold text-[#005461]">Payment Method</h3>
                   </div>
                   
                   <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6 flex items-center gap-4">
                      <div className="w-10 h-6 bg-[#1a1a1a] rounded flex items-center justify-center">
                         <div className="w-6 h-6 rounded-full bg-red-500/80 -mr-3" />
                         <div className="w-6 h-6 rounded-full bg-yellow-500/80" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-[#005461]">•••• 4242</p>
                         <p className="text-xs text-gray-400">Expires 12/28</p>
                      </div>
                   </div>
                </div>
                <Button variant="outline" className="w-full border-gray-200 text-[#005461] hover:border-[#005461]">
                   Update Card
                </Button>
             </motion.div>

             {/* Invoices */}
             <div className="lg:col-span-3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm"
                >
                   <h3 className="text-xl font-bold text-[#005461] mb-6">Invoice History</h3>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                         <thead className="text-xs uppercase text-gray-400 font-bold tracking-widest border-b border-gray-100">
                            <tr>
                               <th className="pb-4 pl-4">Invoice</th>
                               <th className="pb-4">Date</th>
                               <th className="pb-4">Amount</th>
                               <th className="pb-4">Status</th>
                               <th className="pb-4 text-right pr-4">Download</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-50">
                            {[
                               { id: "INV-2024-001", date: "Jan 01, 2026", amount: "$12.00", status: "Paid" },
                               { id: "INV-2023-012", date: "Dec 01, 2025", amount: "$12.00", status: "Paid" },
                               { id: "INV-2023-011", date: "Nov 01, 2025", amount: "$12.00", status: "Paid" },
                            ].map((inv, i) => (
                               <tr key={i} className="group hover:bg-gray-50 transition-colors">
                                  <td className="py-4 pl-4 font-mono text-sm font-bold text-[#005461]">{inv.id}</td>
                                  <td className="py-4 text-sm text-gray-500">{inv.date}</td>
                                  <td className="py-4 text-sm font-bold text-[#005461]">{inv.amount}</td>
                                  <td className="py-4">
                                     <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                                        <Check size={12} strokeWidth={3} /> {inv.status}
                                     </span>
                                  </td>
                                  <td className="py-4 text-right pr-4">
                                     <Button size="icon" variant="ghost" className="text-gray-400 hover:text-[#005461]">
                                        <Download size={16} />
                                     </Button>
                                  </td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </motion.div>
             </div>

          </div>
        </div>
      </main>
    </div>
  );
}
