import {create} from "zustand";

const useUserTypeStore = create((set) => ({
    isDoctor: false,
    isDoctorSignUpSuccess: false,
    isDoctorOTPVerified: false,
    setDoctor: () => set({ isDoctor: true, isPatient: false }),
    setDoctorSignUpSuccess: () => set({isDoctorSignUpSuccess: true}),
    setDoctorOTPVerified: () => set({isDoctorOTPVerified: true}),
    isPatient: false,
    setPatient: () => set({ isDoctor: false, isPatient: true }),
    reset: () => set({ isDoctor: false, isPatient: false }),
}))

export default useUserTypeStore