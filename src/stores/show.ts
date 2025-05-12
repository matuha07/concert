import {create} from "zustand"
import { Show } from "@/@types/show";
import { Api } from "@/services/api";

interface ShowStore {
    shows: Show[];
    isLoading: boolean;
    fetchShows: () => Promise<void>
    
}

export const useShowStore = create<ShowStore>((set) => ({
    shows: [],
    isLoading: false,

    fetchShows: async() => {
        set({ isLoading: true});
        const shows = await Api.show.getAll()
        set({shows})
        set({ isLoading: false})
    }

}));