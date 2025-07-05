import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
};

type ModalAction = {
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = create<ModalState & ModalAction>((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
