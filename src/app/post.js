import create from "zustand";

import { persist } from "zustand/middleware";
import { listPostUrl } from "../api";

const post = (set) => ({
  data: [],
  loading: false,
  isError: false,

  //action
  fetchPost: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(listPostUrl);
      const data = await response.json();

      set((state) => ({
        data: data,
        loading: false,
      }));
    } catch (error) {
      set(() => ({ isError: true, loading: false }));
    }
  },
});

const usePostStore = create(post);

export default usePostStore;
