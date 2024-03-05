import { create } from "zustand";

interface DropdownState {
  activeDropdownId: string | null;
  isHovered: boolean;
  setActiveDropdownId: (id: string | null) => void;
  setIsHovered: (hovered: boolean) => void;
}

export const useDropdownActiveState = create<DropdownState>((set) => ({
  activeDropdownId: null,
  isHovered: false,
  setActiveDropdownId: (id) => set({ activeDropdownId: id }),
  setIsHovered: (hovered) => set({ isHovered: hovered }),
}));
