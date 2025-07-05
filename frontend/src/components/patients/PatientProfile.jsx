import React from "react";
import { motion } from "framer-motion";

const PatientProfile = () => {
    return (
        <motion.div 
            className="w-full bg-blue-100 bg-opacity-50 backdrop-blur-md rounded-xl p-6 flex flex-col lg:flex-row gap-6 shadow-lg shadow-blue-900/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
        
        {/* Left Side: Image + Basic Info */}
        <div className="flex-shrink-0 w-full lg:w-1/4 flex items-center justify-center bg-gray-700 rounded-lg h-60">
            {/* Patient image placeholder */}
            <span className="text-gray-400 text-sm">Patient Image</span>
        </div>

        {/* Right Side: Detailed Info */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-blue-800">
            
            <div>
            <p className="text-sm text-gray-400">Full Name</p>
            <p className="text-base font-medium">John Doe</p>
            </div>
            
            <div>
            <p className="text-sm text-gray-400">Patient ID</p>
            <p className="text-base font-medium">#A123456</p>
            </div>
            
            <div>
            <p className="text-sm text-gray-400">Age / Gender</p>
            <p className="text-base font-medium">54 / Male</p>
            </div>
            
            <div>
            <p className="text-sm text-gray-400">Blood Group</p>
            <p className="text-base font-medium">B+</p>
            </div>

            <div>
            <p className="text-sm text-gray-400">Dialysis Machine</p>
            <p className="text-base font-medium">Fresenius 4008S</p>
            </div>

            <div>
            <p className="text-sm text-gray-400">Dialysis Schedule</p>
            <p className="text-base font-medium">Mon / Wed / Fri — 4:00-6:00 PM</p>
            </div>

            <div>
            <p className="text-sm text-gray-400">Assigned Doctor</p>
            <p className="text-base font-medium">Dr. Anita Sharma</p>
            </div>

            <div>
            <p className="text-sm text-gray-400">Last Dialysis</p>
            <p className="text-base font-medium">03 July 2025</p>
            </div>

        </div>
        </motion.div>
    );
};

export default PatientProfile;
