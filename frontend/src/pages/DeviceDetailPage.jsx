import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@heroui/react';
import { MessageSquareTextIcon, ChevronDown } from 'lucide-react';
import PatientAnalytics from '../components/patients/PatientAnalytics';
import PatientProfile from '../components/patients/PatientProfile';
import DialysisDetailCard from '../components/patients/DialysisDetailCard';
import DialysisDetailGraph from '../components/patients/DialysisDetailGraph';
import ChatSidebar from '../components/patients/ChatSidebar';

// Mock data for patients on the device
const mockPatients = [
    {
        id: 'P-001',
        name: 'John Doe',
        profile: {}, // You can pass props to PatientProfile if needed
    },
    {
        id: 'P-002',
        name: 'Jane Smith',
        profile: {},
    },
];

// Mock chat targets
const chatTargets = [
    { id: 'patient', label: 'Patient' },
    { id: 'technician', label: 'Technician' },
];

// Dummy chat histories
const chatHistories = {
    patient: [
        { from: 'doctor', text: 'Hello, how are you feeling today?' },
        { from: 'patient', text: 'I am feeling okay, thank you.' },
        { from: 'doctor', text: 'Let me know if you feel any discomfort.' },
    ],
    technician: [
        { from: 'doctor', text: 'Is the machine running smoothly?' },
        { from: 'technician', text: 'Yes, all parameters are normal.' },
        { from: 'doctor', text: 'Great, thank you for the update.' },
    ],
};

const DeviceDetailPage = () => {
    const { deviceId } = useParams();
    const [selectedPatient, setSelectedPatient] = useState(mockPatients[0]);
    const [chatOpen, setChatOpen] = useState(false);
    const [chatTarget, setChatTarget] = useState(chatTargets[0]);
    const [patientPopoverOpen, setPatientPopoverOpen] = useState(false);
    const [showChatTargetPopover, setShowChatTargetPopover] = useState(false);

    // Pass the correct dummy chat history to ChatSidebar
    const getInitialMessages = () => chatHistories[chatTarget.id] || [];

    return (
        <div className="w-full min-h-screen py-10 px-4 lg:px-8 flex flex-col items-center">
            <div className="w-full mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-blue-400 mb-1">Device: {deviceId}</h1>
                        <div className="text-gray-600 text-sm">Currently Hooked Patient:</div>
                        <Popover open={patientPopoverOpen} onOpenChange={setPatientPopoverOpen}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="mt-2 flex items-center gap-2">
                            {selectedPatient.name}
                            <ChevronDown className="w-4 h-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                            <div className="flex flex-col">
                            {mockPatients.map((p) => (
                                <button
                                key={p.id}
                                className={`px-4 py-2 text-left hover:bg-gray-100 ${selectedPatient.id === p.id ? 'bg-gray-100 font-semibold' : ''}`}
                                onClick={() => { setSelectedPatient(p); setPatientPopoverOpen(false); }}
                                >
                                {p.name}
                                </button>
                            ))}
                            </div>
                        </PopoverContent>
                        </Popover>
                    </div>
                </div>
                {/* Patient Info and Analytics */}
                <div className="mb-6">
                    <PatientAnalytics />
                    <PatientProfile />
                </div>
                    {/* Dialysis Monitoring Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-blue-800 my-6">Dialysis Monitoring</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <DialysisDetailCard />
                        <DialysisDetailGraph />
                    </div>
                </div>
            </div>
            {/* Chat Sidebar */}
            <div>
                {chatOpen && (
                <ChatSidebar
                    open={chatOpen}
                    onClose={() => setChatOpen(false)}
                    initialMessages={getInitialMessages()}
                    chatTarget={chatTarget.label}
                />
                )}
            </div>
            {/* Floating Chat Toggle Button */}
            {!chatOpen && (
                <Popover open={showChatTargetPopover} onOpenChange={setShowChatTargetPopover}>
                    <PopoverTrigger asChild>
                        <Button
                        className="fixed bottom-6 right-6 z-40 text-white shadow-lg p-4 flex items-center gap-2 transition md:bottom-8 md:right-8"
                        color="primary"
                        aria-label="Open chat sidebar"
                        >
                            <MessageSquareTextIcon className="w-4 h-4" />
                            <span className="hidden sm:inline text-sm font-medium">Chat</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                        <div className="flex flex-col">
                        {chatTargets.map((target) => (
                            <button
                            key={target.id}
                            className={`px-4 py-2 text-left hover:bg-gray-100 ${chatTarget.id === target.id ? 'bg-gray-100 font-semibold' : ''}`}
                            onClick={() => {
                                setChatTarget(target);
                                setShowChatTargetPopover(false);
                                setChatOpen(true);
                            }}
                            >
                            {target.label}
                            </button>
                        ))}
                        </div>
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
};

export default DeviceDetailPage; 