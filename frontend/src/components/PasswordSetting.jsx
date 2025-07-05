import {Button, Form, Input } from "@heroui/react";
import {EyeClosed, Eye} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router";
import useUserTypeStore from "../store/useUserTypeStore";

const PasswordSetting = () => {
    const [submitted, setSubmitted] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const errors = [];
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    // to navigate to DoctorDashboard page
    const navigate = useNavigate();

    // set global state for authentication done
    const setDoctorAuthenticationDone = useUserTypeStore((state) => state.setDoctorAuthenticationDone);

    // function to navigate to the doctor page
    const handleDoctorPasswordSet = () => {
        setDoctorAuthenticationDone();
        navigate("/doctor-dashboard");
    };

    // Password validation
    if (password.length < 8) {
        errors.push("Password must be 8 characters or more.");
    }
    if ((password.match(/[A-Z]/g) || []).length < 1) {
        errors.push("Password must include at least 1 upper case letter");
    }
    if ((password.match(/[^a-z0-9]/gi) || []).length < 1) {
        errors.push("Password must include at least 1 symbol.");
    }

    // Confirm password validation
    const confirmPasswordError = confirmPassword !== password;

    // Button should be disabled if there are errors or passwords don't match
    const isButtonDisabled = errors.length > 0 || confirmPasswordError || !password || !confirmPassword;

    return (
        <Form
            className="w-full max-w-xs flex flex-col gap-4 bg-gray-100/30 px-4 py-4 rounded-2xl shadow-lg shadow-gray-400 my-6"
            onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));
                setSubmitted(data);
                handleDoctorPasswordSet();
            }}
        >
            <div className="flex flex-col justify-center items-center gap-1 mb-4">
                <h2 className="text-large  font-bold">Set Password</h2>
                <p className="text-xs/3 text-default-400  font-medium text-center">Let's get started by setting up your profile. All fields are necessary.</p>
            </div>
            {/* Password input */}
            <Input
                className="max-w-xs"
                errorMessage={() => (
                    <ul>
                        {errors.map((error, i) => (
                            <li key={i}>{error}</li>
                        ))}
                    </ul>
                )}
                isInvalid={errors.length > 0}
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                value={password}
                onValueChange={setPassword}
                endContent={
                    <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? (
                            <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                variant="bordered"
            />
            {/* Confirm password */}
            <Input 
                className="max-w-xs"
                errorMessage={confirmPasswordError ? () => (<ul>Passwords do not match</ul>) : undefined}
                isInvalid={confirmPasswordError}
                label="Confirm Password"
                labelPlacement="outside"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onValueChange={setConfirmPassword}
            />
            <Button color="primary" type="submit" className="mx-auto mt-4 w-full" isDisabled={isButtonDisabled}>
                Finish Sign-Up
            </Button>
        </Form>
    )
}

export default PasswordSetting