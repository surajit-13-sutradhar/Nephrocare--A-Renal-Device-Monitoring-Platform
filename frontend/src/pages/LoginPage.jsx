import React from 'react'
import LoginCard from '../components/LoginCard'

const LoginPage = () => {
    

    return (
        <div className="w-full min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2">
            {/* image div */}
            <div className="w-full h-full">
                <img src="/sign-up-desktop.webp" alt="Sign up illustration" className="w-full h-full object-cover" />
            </div>
            <div className="w-full flex flex-grow justify-center items-center">
                <LoginCard />
            </div>
        </div>
    )
}

export default LoginPage