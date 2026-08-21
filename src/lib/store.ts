import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  isMenuOpen: boolean;
  toggleMenu: (open?: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open ?? !state.isMenuOpen })),
}));
