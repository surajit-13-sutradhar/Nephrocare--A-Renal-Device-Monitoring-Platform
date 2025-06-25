import React from 'react'
import DoctorSignUpForm from '../components/DoctorSignUpForm'
import Navigation from '../components/Navigation'
import PatientSignUpForm from '../components/PatientSignUpForm'

const SignUpPage = () => {
  return (
    <div className="w-full min-h-screen mx-auto flex flex-col">
        
        <Navigation />
        <div className="w-full flex flex-grow justify-center items-center">
            {/* Conditionally render either Doctor Sign Up form or the Patient Sign Up form */}
            <DoctorSignUpForm />
            {/* <PatientSignUpForm /> */}
        </div>
    </div>
  )
}

export default SignUpPage