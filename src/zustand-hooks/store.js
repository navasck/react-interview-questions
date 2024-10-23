import { create } from 'zustand';
// imports the create function from the zustand library, which is used to create stores.

export const userStore = create((set) => ({
  count: 0,
  incrementFtn: () => set((state) => ({ count: state.count + 1 })),
  decrementFtn: () => set((state) => ({ count: state.count - 1 })),
}));

// Zustand provides a simple and efficient way to manage state in React applications.
// The create function is used to define stores with their state and actions.
// The set function is used to update the state immutably.
// The useStore hook is used to access the store's state and actions from React components.
