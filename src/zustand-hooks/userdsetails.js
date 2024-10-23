import { create } from 'zustand';

export const userDetails = create((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async (id) => {
    set({ loading: true });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      set({ user: data, loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch user', loading: false });
    }
  },

  clearUser: () => set({ user: null }),
}));
