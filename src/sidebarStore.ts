import { create } from "zustand";

interface SidebarStore {
	selectedLink: string;
	setSelectedLink: (link: string) => void;
}

const useSidebarStore = create<SidebarStore>((set) => ({
	selectedLink: "Dashboard",
	setSelectedLink: (link) => set({ selectedLink: link }),
}));

export default useSidebarStore;
