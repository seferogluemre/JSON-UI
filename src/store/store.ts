import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Photo } from "../components/interface/Photo";



export const useStore = create(
    persist(
        (set) => ({
            favorites: [],
            addFavorite: (photo: Photo) =>
                set((state: any) => ({ favorites: [...state.favorites, photo] })),
            removeFavorite: (id: number) =>
                set((state: any) => ({
                    favorites: state.favorites.filter((photo: Photo) => photo.id !== id),
                })),
        }),
        { name: "favorite-storage" }
    )
)