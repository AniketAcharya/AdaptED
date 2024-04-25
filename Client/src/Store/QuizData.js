import { create } from "zustand";

export const useQuizData = create((set) => ({
  currentScore: {
    video: 0,
    article: 0,
  },
  current: "",
  interest: "",
  name: "",
  quizCount: 0,
  setCurrent: (val) => set({ current: val }),
  setCurrentInterest: (val) => set({ interest: val }),
  setCurrentName: (val) => set({ name: val }),
  setQuizCount: (val) => set({ quizCount: val }),
  setCurrentScore: (key, val) =>
    set((state) => ({
      currentScore: { ...state.currentScore, [key]: val },
    })),
  quizData: null,
  loading: true,
  setQuizData: (val) => set({ quizData: val }),
  setLoading: (val) => set({ loading: val }),
  topicName: "",
  setTopicName: (val) => set({ topicName: val }),
}));
