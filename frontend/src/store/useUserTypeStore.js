import {create} from "zustand";

const useUserTypeStore = create((set) => ({
    isDoctor: false,
    isPatient: false,
    setDoctor: () => set({ isDoctor: true, isPatient: false }),
    setPatient: () => set({ isDoctor: false, isPatient: true }),
    reset: () => set({ isDoctor: false, isPatient: false }),
}))

export default useUserTypeStore