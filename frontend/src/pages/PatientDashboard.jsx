import React, { useState } from 'react';
import Header from '../components/Header';
import PatientAnalytics from '../components/patients/PatientAnalytics';
import PatientProfile from '../components/patients/PatientProfile';
import DialysisDetailCard from '../components/patients/DialysisDetailCard';
import DialysisDetailGraph from '../components/patients/DialysisDetailGraph';
import ChatSidebar from '../components/patients/ChatSidebar';
import { MessageSquareTextIcon, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/button';
import { Calendar } from '@heroui/react';
import { parseDate } from '@internationalized/date';

const PatientDashboard = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);
    const [selectedBookingDate, setSelectedBookingDate] = useState(parseDate("2024-07-07"));
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleBook = () => {
        setBookingSuccess(true);
        setTimeout(() => {
            setBookingOpen(false);
            setBookingSuccess(false);
        }, 1200);
    };

    return (
        <div className="w-full min-h-screen flex-1 overflow-auto relative z-10">
            <Header title="Patient Dashboard" />
            <main className={`w-full mx-auto py-6 px-4 lg:px-8 flex transition-all duration-300 ease-in-out ${chatOpen ? 'md:pr-80' : ''}`}>
                <div className="flex-1 transition-all duration-300 ease-in-out">
                    <PatientAnalytics />
                    <PatientProfile />
                    
                    {/* Dialysis Monitoring Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 my-6">Dialysis Monitoring</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <DialysisDetailCard />
                            <DialysisDetailGraph />
                        </div>
                    </div>
                    {/* Book Session Card */}
                    <div className="w-full flex justify-center mb-8">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col items-center w-full max-w-xl">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Book Your Session</h3>
                            <p className="text-gray-500 mb-4 text-sm">Reserve your next dialysis session easily.</p>
                            <Button color="primary" onClick={() => setBookingOpen(true)}>
                                Book Session
                            </Button>
                        </div>
                    </div>
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
            {/* Book Session Modal Overlay */}
            <AnimatePresence>
                {bookingOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 w-full max-w-md relative animate-fadeIn">
                            <button
                                className="absolute top-4 right-4 p-1 rounded hover:bg-gray-100"
                                onClick={() => setBookingOpen(false)}
                                aria-label="Close booking modal"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Dialysis Session</h3>
                            <p className="text-gray-500 mb-4 text-sm">Select a date for your next session.</p>
                            <div className="mb-6">
                                <Calendar
                                    aria-label="Select booking date"
                                    value={selectedBookingDate}
                                    onChange={setSelectedBookingDate}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex gap-3 justify-end">
                                <Button variant="outline" onClick={() => setBookingOpen(false)}>
                                    Cancel
                                </Button>
                                <Button color="primary" onClick={handleBook} disabled={bookingSuccess}>
                                    {bookingSuccess ? 'Booked!' : 'Book'}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
            {/* Floating Chat Toggle Button */}
            {!chatOpen && (
                <Button
                    className="fixed bottom-6 right-6 z-40 text-white shadow-lg p-4 flex items-center gap-2 transition md:bottom-8 md:right-8"
                    onClick={() => setChatOpen(true)}
                    aria-label="Open chat sidebar"
                    color="primary"
                >
                    <MessageSquareTextIcon className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm font-medium">Chat with Doctor</span>
                </Button>
            )}
        </div>
    )
}

export default PatientDashboard