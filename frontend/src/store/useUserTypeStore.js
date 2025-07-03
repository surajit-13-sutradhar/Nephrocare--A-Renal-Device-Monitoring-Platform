import {create} from "zustand";
import {persist} from "zustand/middleware";

const useUserTypeStore = create((set) => ({
    isDoctor: false,
    isDoctorDataSubmittedSuccess: false,
    isDoctorOTPVerified: false,
    isDoctorAuthenticationDone: false,
    isDoctorAuthorized: false,
    setDoctor: () => set({ isDoctor: true, isPatient: false }),
    setDoctorDataSubmittedSuccess: () => set({isDoctorDataSubmittedSuccess: true}),
    setDoctorOTPVerified: () => set({isDoctorOTPVerified: true}),
    setDoctorAuthenticationDone: () => set({ isDoctorAuthenticationDone: true }),
    setDoctorAuthorized: () => set({ isDoctorAuthorized: true }),
    isPatient: false,
    setPatient: () => set({ isDoctor: false, isPatient: true }),
    reset: () => set({ 
        isDoctor: false, 
        isPatient: false, 
        isDoctorDataSubmittedSuccess: false,
        isDoctorOTPVerified: false,
        isDoctorAuthenticationDone: false,
        isDoctorAuthorized: false
    }),
}))

// const useUserTypeStore = create(
//     persist(
//         (set) => ({
//             isDoctor: false,
//             isDoctorDataSubmittedSuccess: false,
//             isDoctorOTPVerified: false,
//             isDoctorAuthenticationDone: false,
//             setDoctor: () => set({ isDoctor: true, isPatient: false }),
//             setDoctorDataSubmittedSuccess: () => set({ isDoctorDataSubmittedSuccess: true }),
//             setDoctorOTPVerified: () => set({ isDoctorOTPVerified: true }),
//             setDoctorAuthenticationDone: () => set({ isDoctorAuthenticationDone: true }),
//             isPatient: false,
//             setPatient: () => set({ isDoctor: false, isPatient: true }),
//             reset: () => set({ isDoctor: false, isPatient: false }),
//         }),
//         {
//             name: "user-type-storage", // unique name in localStorage
//             // Optionally, you can whitelist/blacklist state keys, or use sessionStorage
//         }
//     )
// );

export default useUserTypeStore