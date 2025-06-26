import {Form, Button, InputOtp} from "@heroui/react";
import { useState } from "react";
import useUserTypeStore from "../store/useUserTypeStore";

const OTPVerification = () => {
    const [value, setValue] = useState();
    const [message, setMessage] = useState("");
    const [isVerified, setIsVerified] = useState(false); // to store the state of correct otp entered or not-- local state
    const [showResend, setShowResend] = useState(false); // to determine whether to show resend button or not
    // i am setting a default OTP value for visual testing purposes. remove this part while working on production
    let otp = "123456";

    // Global state of OTP Verification
    const setDoctorOTPVerified = useUserTypeStore((state) => state.setDoctorOTPVerified);

    // a dummy function for otp verification
    const handleSubmit = (e) => {
        e.preventDefault();

        if (value !== otp && value !== "") {
            setMessage("OTP doesn't match. Try again.");
            setIsVerified(false);
            setShowResend(true);
        } else {
            // i am verifying the otp using a local value of otp. but you'll need to assign some asynchronity to verify with your provider if the otp is actually verified or not before changing the global state
            setMessage("OTP verified! proceed to password creation.");
            setIsVerified(true);
            setShowResend(false);
        }
    }

    // Function to set otp verification state global variable
    const handleGlobalSubmit = () => {
        setDoctorOTPVerified(true);
    }

    return (
        <Form
            className="w-full max-w-xs flex flex-col items-center gap-4 bg-gray-100/30 px-4 py-4 rounded-2xl shadow-lg shadow-gray-400 my-6"
            onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));

            setAction(`submit ${JSON.stringify(data)}`);
        }}
        >
            <div className="flex flex-col justify-center items-center gap-1">
                <h2 className="text-large  font-bold">Verify your credentials</h2>
                <p className="text-xs/3 text-default-400  font-medium text-center">Enter the 6-digit code sent to your mobile and email.</p>
            </div>
            <InputOtp isRequired length={6} value={value} onValueChange={setValue} color="primary" bordered isDisabled={isVerified} />
            {/* message div */}
            {message && (
                <p
                    className={`text-sm text-center font-medium ${
                        isVerified ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {message}
                </p>
            )}
            {/*  */}
            {!isVerified && 
                <Button color="primary" type="submit" className="mx-auto w-full" onClick={handleSubmit}>
                    Verify OTP
                </Button>
            }
            
            {isVerified && 
                <Button color="primary" type="submit" className="mx-auto w-full" onClick={handleGlobalSubmit}>
                    Set Password
                </Button>
            }
            
            {/* resend otp button only to be shown only when there is attempt to submit an incorrect OTP */}
            {showResend && (
                <Button color="secondary" variant="flat" className="mx-auto w-full">
                    Resend OTP
                </Button>
            )}
        </Form>
    )
}

export default OTPVerification