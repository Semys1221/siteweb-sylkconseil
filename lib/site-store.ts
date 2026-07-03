import { create } from "zustand";

export type FlowStep = "welcome" | "calendly" | "qualification";

interface SiteState {
  // Funnel
  step: FlowStep;
  answers: Record<string, string>;
  eventUri: string | null;
  inviteeUri: string | null;

  // Overlay
  overlayOpen: boolean;

  // Nav
  isMenuOpen: boolean;

  // Actions — funnel
  advance: () => void;
  answerQuestion: (key: string, value: string) => void;
  setCalendlyEvent: (eventUri: string, inviteeUri: string) => void;
  reset: () => void;

  // Actions — overlay
  openOverlay: () => void;
  closeOverlay: () => void;

  // Actions — nav
  toggleMenu: () => void;
  setMenuOpen: (v: boolean) => void;
}

const order: FlowStep[] = ["welcome", "calendly", "qualification"];

export const useSiteStore = create<SiteState>((set, get) => ({
  step: "welcome",
  answers: {},
  eventUri: null,
  inviteeUri: null,
  overlayOpen: false,
  isMenuOpen: false,

  advance: () => {
    const { step } = get();
    const idx = order.indexOf(step);
    if (idx < order.length - 1) set({ step: order[idx + 1] });
  },

  answerQuestion: (key, value) => {
    const { answers } = get();
    set({ answers: { ...answers, [key]: value } });
  },

  setCalendlyEvent: (eventUri, inviteeUri) => set({ eventUri, inviteeUri }),

  reset: () =>
    set({
      step: "welcome",
      answers: {},
      eventUri: null,
      inviteeUri: null,
      overlayOpen: false,
    }),

  openOverlay: () => set({ overlayOpen: true }),
  closeOverlay: () => set({ overlayOpen: false }),

  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),
  setMenuOpen: (v) => set({ isMenuOpen: v }),
}));
