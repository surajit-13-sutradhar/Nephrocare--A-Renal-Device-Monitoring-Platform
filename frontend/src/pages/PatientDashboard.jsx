import React, { useState } from 'react'
import Header from '../components/Header'
import PatientAnalytics from '../components/patients/PatientAnalytics'
import PatientProfile from '../components/patients/PatientProfile'
import ChatSidebar from '../components/patients/ChatSidebar'
import { MessageSquareTextIcon } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

const PatientDashboard = () => {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className="w-full min-h-screen flex-1 overflow-auto relative z-10">
            <Header title="Your Dashboard" />
            <main className={`w-full mx-auto py-6 px-4 lg:px-8 flex transition-all duration-300 ease-in-out ${chatOpen ? 'md:pr-80' : ''}`}>
                <div className="flex-1 transition-all duration-300 ease-in-out">
                    <PatientAnalytics />
                    <PatientProfile />
                </div>
                {/* Chat Sidebar for desktop */}
                <div className="hidden md:block">
                    <AnimatePresence>
                        {chatOpen && (
                            <ChatSidebar open={chatOpen} onClose={() => setChatOpen(false)} />
                        )}
                    </AnimatePresence>
                </div>
            </main>
            {/* Chat Sidebar for mobile (overlays) */}
            <div className="md:hidden">
                <AnimatePresence>
                    {chatOpen && (
                        <>
                            {/* Overlay */}
                            <div className="fixed inset-0 bg-black bg-opacity-30 z-20 transition-opacity duration-300 ease-in-out" onClick={() => setChatOpen(false)} />
                            <ChatSidebar open={chatOpen} onClose={() => setChatOpen(false)} />
                        </>
                    )}
                </AnimatePresence>
            </div>
            {/* Floating Chat Toggle Button */}
            {!chatOpen && (
                <button
                    className="fixed bottom-6 right-6 z-40 bg-violet-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 hover:bg-violet-700 transition md:bottom-8 md:right-8"
                    onClick={() => setChatOpen(true)}
                    aria-label="Open chat sidebar"
                >
                    <MessageSquareTextIcon className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm font-medium">Chat with Doctor</span>
                </button>
            )}
        </div>
    )
}

export default PatientDashboard