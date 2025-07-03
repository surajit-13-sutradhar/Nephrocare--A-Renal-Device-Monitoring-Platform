import {Button, Form, Input, Divider} from "@heroui/react";
import {EyeClosed, Eye} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useUserTypeStore from "../store/useUserTypeStore";

const LoginCard = () => {
    // some test data for validation
    const validPassword = "Nephro#8";
    const validPhone = "1234567";
    const validEmail = "nep@hro";
    
    // State management
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Store and navigation
    const setDoctorAuthorized = useUserTypeStore((state) => state.setDoctorAuthorized);
    const navigate = useNavigate();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if credentials match predefined values
        const isEmailValid = formData.email === validEmail || formData.email === validPhone;
        const isPasswordValid = formData.password === validPassword;
        
        if (isEmailValid && isPasswordValid) {
            setMessage("Login successful! Redirecting...");
            setIsSuccess(true);
            // Set doctor as authorized and navigate to dashboard
            setDoctorAuthorized();
            setTimeout(() => {
                navigate("/doctor-dashboard");
            }, 1500); // Small delay to show success message
        } else {
            setMessage("Invalid email/phone or password. Please try again.");
            setIsSuccess(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear message when user starts typing
        if (message) {
            setMessage("");
        }
    };

    return (
        <Form
            className="w-full max-w-xs flex flex-col gap-4 bg-gray-100/30 px-4 py-4 rounded-2xl shadow-lg shadow-gray-400 my-6"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col justify-center items-center gap-1 mb-4">
                <h2 className="text-large font-bold">Login to Nephrocare</h2>
                <p className="text-xs/3 text-default-400 font-medium text-center">Welcome back! Please enter your credentials to continue.</p>
            </div>
            
            <Input
                isRequired
                label="Email or Phone"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email or phone"
                type="text"
                value={formData.email}
                onValueChange={(value) => handleInputChange("email", value)}
            />

            <Input
                isRequired
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                value={formData.password}
                onValueChange={(value) => handleInputChange("password", value)}
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <Eye className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>
                }
            />

            {/* Message display - only shows after submission */}
            {message && (
                <p
                    className={`text-sm text-center font-medium ${
                        isSuccess ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {message}
                </p>
            )}

            <div className="w-full flex flex-col justify-center items-center text-center gap-2">
                {/* Login button */}
                <Button 
                    color="primary" 
                    type="submit" 
                    className="mx-auto mt-4 w-full"
                    isDisabled={isSuccess}
                >
                    {isSuccess ? "Login Successful!" : "Login"}
                </Button>
                
                {/* Divider between Login and Google AUTH button */}
                <div className="flex justify-center items-center">
                    <Divider className="my-4 mr-2" />
                    <span className="text-default-500 font-medium">OR</span>
                    <Divider className="my-4 ml-2" />
                </div>
                
                {/* Google AUTH Button */}
                <Button color="secondary" variant="bordered" className="mx-auto w-full">
                    Login with Google Auth
                </Button>
            </div>
        </Form>
    );
};

export default LoginCard;