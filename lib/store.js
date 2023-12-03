import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  name: null,
  email: null,
  accessLevel: "user",
  id: null,
  //   imageUrl: null,
  isLoggedIn: false,

  login: (name, email, id, accessLevel) => {
    set((state) => {
      return {
        name,
        batchNumber,
        id,
        // imageUrl,
        isLoggedIn: true,
        accessLevel: accessLevel || "user",
      };
    });
  },

  logout: () => {
    set((state) => {
      return {
        name: null,
        email: null,
        isLoggedIn: false,
        accessLevel: "user",
      };
    });
  },
});

export const useUser = create(persist(user, { name: "_auth" }));
