// store/useStore.ts
import { create } from "zustand";

interface UserState {
	user: { email: string; id: string } | null;
	setUser: (user: { email: string; id: string } | null) => void;
	logout: () => void;
}

export const useStore = create<UserState>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	logout: () => set({ user: null }),
}));
