import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  courses: [],
  //action
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === courseId ? { ...c, completed: !c.completed } : c
      ),
    }));
  },
});

const useCourseStore = create(devtools(persist(store, { name: "courses" })));

export default useCourseStore;
