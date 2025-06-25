import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, useUser} from "@heroui/react";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";

import { useState } from "react";
import { Stethoscope, Thermometer } from "lucide-react";

// importing store
import useUserTypeStore from "../store/useUserTypeStore";
import {useNavigate} from "react-router";

// declaring states
const setDoctor = useUserTypeStore((state) => state.setDoctor);
const setPatient = useUserTypeStore((state) => state.setPatient);
const navigate = useNavigate()

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Features",
        "Customers"
    ]

    return (
        <Navbar shouldHideOnScroll isBordered>
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
                    <Link aria-current="page" href="#">
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
                <NavbarItem className="flex">
                    <Link href="#" className="font-semibold">Login</Link>
                </NavbarItem>
                {/* Sign Up Popover */}
                <NavbarItem>
                    <Popover placement="bottom-start">
                        <PopoverTrigger>
                            <Button as={Link} color="primary" href="#" variant="flat" className="font-semibold">Sign Up</Button>
                        </PopoverTrigger>
                        <PopoverContent className="rounded-t-small">
                            <div className="px-1 py-1">
                                <div className="text-small font-bold">Sign up as</div>
                                <Link href="#" className="text-small font-semibold flex gap-2" underline="focus"><Stethoscope className="w-4 h-4 text-secondary-500" /><p>Doctor</p></Link>
                                <Link href="#" className="text-small font-semibold flex gap-2" underline="focus"><Thermometer className="w-4 h-4 text-secondary-500" /><p>Patient</p></Link>
                            </div>
                        </PopoverContent>
                        </Popover>
                </NavbarItem>
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