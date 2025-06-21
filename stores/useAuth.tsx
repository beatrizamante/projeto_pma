import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: null | { username: string; role: string };
};

type AuthAction = {
  login: (user: { username: string; role: string }) => void;
  logout: () => void;
};

export const useAuth = create<AuthState & AuthAction>((set) => ({
  isAuthenticated: false,
  user: null,

  login: (user) => set(() => ({ isAuthenticated: true, user })),
  logout: () => set(() => ({ isAuthenticated: false, user: null })),
}));
