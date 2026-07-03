"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Calendar } from "lucide-react";
import { tenantConfig } from "@/lib/tenant-config";
import { useSiteStore } from "@/lib/site-store";
import { useFlowStore } from "./store";
import { GlassCard } from "./glass-card";
import { QualificationForm } from "./qualification-form";

const VIDEO_URL =
  "https://grzs6rqzvzupoxv9.public.blob.vercel-storage.com/stephane/video-cgp-O0OlUjKJ9a3ANp5QObDKMsVvd56zvz.mp4";
const POSTER_URL =
  "https://image.mux.com/601I74ydXCKONbHE02Sz00NPIYZJNk6usdBL00q77FwUkvw/thumbnail.jpg";

export function FunnelFlow() {
  const closeOverlay = useSiteStore((s) => s.closeOverlay);
  const step = useFlowStore((s) => s.step);
  const advance = useFlowStore((s) => s.advance);
  const reset = useFlowStore((s) => s.reset);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);

  const handleNext = useCallback(() => {
    if (step === "welcome") {
      setShowVideo(false);
      videoRef.current?.pause();
    }
    advance();
  }, [step, advance]);

  useEffect(() => {
    if (step === "calendly") {
      const timer = setTimeout(() => {
        const videoEl = videoRef.current;
        if (videoEl) {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
        setShowVideo(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div className="h-dvh w-full bg-[#0a0a0f] overflow-hidden relative">
      {/* Video background */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              poster={POSTER_URL}
              className="w-full h-full object-cover"
              onEnded={() => {
                // auto-advance when video ends
                if (step === "welcome") handleNext();
              }}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        <GlassCard currentStep={step}>
          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center text-center gap-6 py-8"
              >
                <h2 className="text-2xl md:text-3xl font-light text-white/90 max-w-lg">
                  Stéphane vous reçoit pour un échange de objectif
                </h2>
                <p className="text-sm text-white/50 max-w-md">
                  Visionnez la vidéo ci-contre, puis cliquez pour continuer.
                </p>
                <button
                  onClick={handleNext}
                  className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
                >
                  Continuer
                </button>
              </motion.div>
            )}
            {step === "calendly" && (
              <motion.div
                key="calendly"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center text-center gap-6 py-8"
              >
                <h2 className="text-2xl md:text-3xl font-light text-white/90">
                  Choisissez votre créneau
                </h2>
                <p className="text-sm text-white/50">
                  30 min suffisent pour faire le point sur votre situation.
                </p>
                <a
                  href={tenantConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(tenantConfig.calendlyUrl, "_blank");
                    advance();
                  }}
                >
                  <Calendar size={16} />
                  Voir les créneaux disponibles
                </a>
                <button
                  onClick={advance}
                  className="text-xs text-white/40 hover:text-white/60 underline"
                >
                  J&apos;ai déjà réservé, passer à la qualification
                </button>
              </motion.div>
            )}
            {step === "qualification" && (
              <motion.div
                key="qualification"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-4"
              >
                <QualificationForm />
              </motion.div>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>

      {/* Close button */}
      <button
        onClick={() => {
          reset();
          closeOverlay();
        }}
        className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all flex items-center justify-center"
      >
        ✕
      </button>
    </div>
  );
}
