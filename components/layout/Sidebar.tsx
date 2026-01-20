"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Rss, Settings, Mic2, BarChart2, LogOut, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

export const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Blogs', href: '/dashboard/blogs', icon: Rss },
    { name: 'Comments', href: '/dashboard/comments', icon: Mic2 },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#001E23] border-r border-white/5 flex flex-col z-40 hidden md:flex">
      <div className="p-8">
        <Link href="/" className="group">
          <Logo light />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                isActive 
                  ? "bg-[#00B7B5]/10 text-[#00B7B5]" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon size={20} className={cn(
                "transition-colors",
                isActive ? "text-[#00B7B5]" : "text-white/40 group-hover:text-white"
              )} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all w-full">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};
