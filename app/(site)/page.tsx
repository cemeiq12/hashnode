"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { VoiceDemo } from "@/components/landing/VoiceDemo";
import { CTA } from "@/components/landing/CTA";
import { Wishlist } from "@/components/landing/Wishlist";

// Variants for section entrance
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom organic ease
    }
  }
};

const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      {/* Hero doesn't need ScrollReveal as it's above the fold, but we can animate its children */}
      <Hero />
      
      <HowItWorks />

      <AnimatedSection>
        <Features />
      </AnimatedSection>
      
      <AnimatedSection>
        <VoiceDemo />
      </AnimatedSection>

      <AnimatedSection>
        <Wishlist />
      </AnimatedSection>
      
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </main>
  );
}
