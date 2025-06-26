import {Form, Input, Button, Divider} from "@heroui/react";
import useUserTypeStore from "../store/useUserTypeStore";

const DoctorSignUpForm = () => {
    const setDoctorDataSubmittedSuccess = useUserTypeStore((state) => state.setDoctorDataSubmittedSuccess);

    // Only called if all fields are valid due to built-in validation (or regex in the production)
    const handleSubmit = (e) => {
        e.preventDefault();
        setDoctorDataSubmittedSuccess();
    };

    return (
        <Form
            className="w-full max-w-xs flex flex-col gap-4 bg-gray-100/30 px-4 py-4 rounded-2xl shadow-lg shadow-gray-400 my-6"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col justify-center items-center gap-1 mb-4">
                <h2 className="text-large  font-bold">Sign Up</h2>
                <p className="text-xs/3 text-default-400  font-medium text-center">Let's get started by setting up your profile. All fields are necessary.</p>
            </div>
            
            <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="Full Name"
                labelPlacement="outside"
                name="username"
                placeholder="Full Name"
                type="text"
            />

            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
            />
            <Input
                isRequired
                errorMessage="Please enter a valid phone number"
                label="Phone"
                labelPlacement="outside"
                name="phone number"
                placeholder="Enter your phone number"
                type="number"
            />
            <Input
                isRequired
                errorMessage="Please enter UID assigned by the NMC"
                label="Medical ID."
                labelPlacement="outside"
                name="medical Id."
                placeholder="Enter your Medical Id."
                type="text"
            />
            <Input
                isRequired
                errorMessage="Please enter the Hospital you are currently posted at"
                label="Hospital Address"
                labelPlacement="outside"
                name="hospital"
                placeholder="Enter Hospital Name"
                type="text"
            />
            <div className="w-full flex flex-col justify-center items-center text-center gap-2">
                {/* Otp verification button */}
                <Button color="primary" type="submit" className="mx-auto mt-4 w-full">
                    Proceed to OTP Verification
                </Button>
                {/* Divider between OTP Verification and Google AUTH button */}
                <div className="flex justify-center items-center">
                    <Divider className="my-4 mr-2" />
                    <span className="text-default-500 font-medium">OR</span>
                    <Divider className="my-4 ml-2" />
                </div>
                {/* Google AUTH Button */}
                <Button color="secondary" variant="bordered" className="mx-auto w-full">
                    Sign Up with Google Auth
                </Button>
            </div>
        </Form>
    );
};

export default DoctorSignUpForm;