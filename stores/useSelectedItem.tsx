import { create } from "zustand";

type SelectedItemState = {
  selectedId: string | null;
};

type SelectedItemActions = {
  store: (userId: string) => void;
  clear: () => void;
};

export const useSelectedItem = create<SelectedItemState & SelectedItemActions>(
  (set) => ({
    selectedId: null,

    store: (id) => set({ selectedId: id }),
    clear: () => set({ selectedId: null }),
  })
);
