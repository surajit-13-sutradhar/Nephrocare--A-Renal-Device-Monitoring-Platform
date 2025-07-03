import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, useUser, Avatar} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";

import { useState } from "react";
import { Stethoscope, Thermometer, LogOut, Settings } from "lucide-react";

// importing store
import useUserTypeStore from "../store/useUserTypeStore";
import {useNavigate} from "react-router";

// check if doctor is authenticated


const Navigation = () => {
    // declaring states
    const setDoctor = useUserTypeStore((state) => state.setDoctor);
    const setPatient = useUserTypeStore((state) => state.setPatient);
    const isDoctorAuthenticationDone = useUserTypeStore((state) => state.isDoctorAuthenticationDone);
    const isDoctorAuthorized = useUserTypeStore((state) => state.isDoctorAuthorized);
    const reset = useUserTypeStore((state) => state.reset);
    const navigate = useNavigate();

    const handleDoctorSignUp = () => {
        setDoctor();
        navigate("/sign-up");
    };

    const handlePatientSignUp = () => {
        setPatient();
        navigate("/sign-up");
    }

    const handleLogin = () => {
        navigate("/log-in")
    }

    const handleLogout = () => {
        // Reset the authentication state
        reset();
        navigate("/");
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Features",
        "Customers"
    ]

    // Check if user is authenticated (either through signup or login)
    const isAuthenticated = isDoctorAuthenticationDone || isDoctorAuthorized;

    return (
        <Navbar isBordered>
            <NavbarContent>
                {/* menutoggle */}
                <NavbarMenuToggle 
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                {/* Brand */}
                <NavbarBrand>
                    <h1 className="text-2xl font-bold">Nc.</h1>
                    <p className="font-bold text-inherit">Nephrocare</p>
                </NavbarBrand>
            </NavbarContent>
            

            {/* content */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Customers
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                {!isAuthenticated ? (
                    <>
                        <NavbarItem className="flex">
                            <Button as={Link} color="primary" variant="outline" className="font-semibold"  onClick={handleLogin}>Log In</Button>
                        </NavbarItem>
                        {/* Sign Up Popover */}
                        <NavbarItem>
                            <Popover placement="bottom-start">
                                <PopoverTrigger>
                                    <Button as={Link} color="primary" variant="flat" className="font-semibold">Sign Up</Button>
                                </PopoverTrigger>
                                <PopoverContent className="rounded-t-small">
                                    <div className="px-1 py-1">
                                        <div className="text-small font-bold">Sign up as</div>
                                        <Link href="#" className="text-small font-semibold flex gap-2" underline="focus" onClick={handleDoctorSignUp}><Stethoscope className="w-4 h-4 text-secondary-500" /><p>Doctor</p></Link>
                                        <Link href="#" className="text-small font-semibold flex gap-2" underline="focus" onClick={handlePatientSignUp}><Thermometer className="w-4 h-4 text-secondary-500" /><p>Patient</p></Link>
                                        <Link href="#" className="text-small font-semibold flex gap-2" underline="focus" onClick={handlePatientSignUp}><Settings className="w-4 h-4 text-secondary-500" /><p>Technician</p></Link>
                                    </div>
                                </PopoverContent>
                                </Popover>
                        </NavbarItem>
                    </>
                ) : (
                    <>
                        <NavbarItem>
                            <Avatar name="N" className="cursor-pointer" />
                        </NavbarItem>
                        <NavbarItem>
                            <Button 
                                color="danger" 
                                variant="light" 
                                className="font-semibold"
                                onClick={handleLogout}
                                startContent={<LogOut className="w-4 h-4" />}
                            >
                                Logout
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
            {/* Menu items */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        className="w-full"
                        color={
                            index === 0 ? "primary" :  "foreground"
                        }
                        href="#"
                        size="lg"
                    >
                        {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default Navigation