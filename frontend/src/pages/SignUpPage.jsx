import React from 'react'
import DoctorSignUpForm from '../components/DoctorSignUpForm'
import PatientSignUpForm from '../components/PatientSignUpForm'
import useUserTypeStore from '../store/useUserTypeStore'
import OTPVerification from '../components/OTPVerification'
import PasswordSetting from '../components/PasswordSetting'

const SignUpPage = () => {
    const isDoctor = useUserTypeStore((state) => state.isDoctor);
    const isDoctorDataSubmittedSuccess = useUserTypeStore((state) => state.isDoctorDataSubmittedSuccess);
    // const isPatient = useUserTypeStore((state) => state.isPatient);
    const isDoctorOTPVerified = useUserTypeStore((state) => state.isDoctorOTPVerified);

    return (
        <div className="w-full min-h-screen mx-auto flex flex-col">
            {/* <Navigation /> */}
            <div className="w-full flex flex-grow justify-center items-center">
                {/* Conditionally render either Doctor Sign Up form or the Patient Sign Up form */}
                {isDoctor && !isDoctorDataSubmittedSuccess && !isDoctorOTPVerified && <DoctorSignUpForm />}
                {/* The OTP Verification form will appear only when the User data has been successfully verified by the schemas */}
                {/* I am storing the state of datapassed to database as a global state called isDataSuccessfully submitted */}
                {isDoctor && isDoctorDataSubmittedSuccess && !isDoctorOTPVerified && <OTPVerification />}
                {/* <OTPVerification /> */}
                {isDoctor && isDoctorDataSubmittedSuccess && isDoctorOTPVerified && <PasswordSetting />}
                {/* {isPatient && <PatientSignUpForm />} */}
            </div>
        </div>
    )
}

export default SignUpPage