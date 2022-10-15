import create from 'zustand';
import { IStore } from '../types/store';

const useStore = create<IStore>((set) => ({
  isLoggingIn: false,
  isRegistering: false,
  user: undefined,
  search: {
    query: '',
    results: undefined,
    searchActive: false,
  },
  list: undefined,
  featured: undefined,
  selected: {
    type: 'movie',
    id: 0,
    details: undefined,
    visible: false,
    busy: false,
  },
  setUserList: (list) => set({ list }),
  setUserListItems: (list) =>
    set((state: any) => ({ list: { ...state.list, list } })),
  setUser: (user) => set({ user }),
  setSelected: (id, type?) =>
    set((state) => ({
      ...state,
      selected: {
        ...state.selected,
        id,
        type: type ?? state.selected.type,
        visible: true,
        busy: false,
      },
    })),
  removeSelected: () =>
    set((state) => ({
      ...state,
      selected: {
        type: 'movie',
        id: 0,
        details: undefined,
        visible: false,
        busy: false,
      },
    })),
  setSelectedBusy: (busy) =>
    set((state) => ({
      ...state,
      selected: {
        ...state.selected,
        busy,
      },
    })),
  setSelectedResult: (result) =>
    set((state) => ({
      ...state,
      selected: {
        ...state.selected,
        details: result,
      },
    })),
  setLoggingIn: (isLoggingIn) =>
    set((state) => ({
      ...state,
      isLoggingIn,
    })),
  setRegistering: (isRegistering) =>
    set((state) => ({
      ...state,
      isRegistering,
    })),
  setPopularMovies: (movies) =>
    set((state) => ({
      ...state,
      popularMovies: movies,
    })),
  setPopularTv: (tv) =>
    set((state) => ({
      ...state,
      popularTv: tv,
    })),
  setHomeFeatured: (featured) => set({ featured }),
  setSearchQuery: (query: string) =>
    set((state) => ({ search: { ...state.search, query } })),
  setSearchResults: (results: any[] | undefined) =>
    set((state) => ({ search: { ...state.search, results } })),
}));

export default useStore;
