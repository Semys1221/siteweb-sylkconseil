"use client";

import type { FlowStep } from "./store";

interface GlassCardProps {
  children: React.ReactNode;
  currentStep: FlowStep;
}

export function GlassCard({ children, currentStep }: GlassCardProps) {
  return (
    <div className="w-[92vw] sm:w-[80vw] md:w-[60vw] max-w-3xl min-h-[60dvh] flex flex-col">
      <div className="w-full rounded-2xl bg-white/90 backdrop-blur-[15px] border border-white/20 shadow-2xl flex flex-col p-5 sm:p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}
