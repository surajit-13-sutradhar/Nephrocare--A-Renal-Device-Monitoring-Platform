import React from "react";
import { useEffect } from "react";
import { UserIcon } from "lucide-react";
import { motion } from "framer-motion";

const doctorProfile = {
    name: "Dr. Anita Sharma",
    avatar: (
        <UserIcon className="w-8 h-8 rounded-full bg-violet-100 text-violet-500" />
    ),
};

const initialMessages = [
    { from: "doctor", text: "Hello! How are you feeling today?" },
    { from: "patient", text: "I'm feeling a bit tired." },
    { from: "doctor", text: "Thank you for letting me know. Are you experiencing any pain?" },
];

const ChatSidebar = ({ open, onClose }) => {
    const [messages, setMessages] = React.useState(initialMessages);
    const [input, setInput] = React.useState("");
    const messagesEndRef = React.useRef(null);

    useEffect(() => {
        if (open && messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, open]);

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim()) {
        setMessages([...messages, { from: "patient", text: input }]);
        setInput("");
        }
    };

    return (
        <motion.div
        className={`fixed top-0 right-0 h-full z-30 bg-white shadow-lg flex flex-col w-80 max-w-full transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 md:w-80 md:max-w-xs rounded-2xl md:ml-4`}
        style={{ minWidth: open ? "20rem" : 0 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 400 }}
        transition={{ duration: 0.5 }}
        >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-violet-50 rounded-t-2xl">
            <div className="flex items-center gap-3">
            {doctorProfile.avatar}
            <div>
                <div className="font-semibold text-gray-800 text-base">{doctorProfile.name}</div>
                <div className="text-xs text-gray-500">Doctor</div>
            </div>
            </div>
            <button
            className="ml-2 p-1 rounded hover:bg-gray-200 focus:outline-none"
            onClick={onClose}
            aria-label="Close chat sidebar"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, idx) => (
            <div
                key={idx}
                className={`mb-3 flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}
            >
                <div
                className={`rounded-lg px-4 py-2 max-w-[70%] text-sm shadow
                    ${msg.from === "patient" ? "bg-violet-200 text-violet-900" : "bg-blue-100 text-blue-900"}
                `}
                >
                {msg.text}
                </div>
            </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2 rounded-b-2xl">
            <input
            type="text"
            className="flex-1 rounded-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:border-violet-400"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button
            type="submit"
            className="bg-violet-600 text-white px-4 py-2 rounded-full hover:bg-violet-700 text-sm"
            >
            Send
            </button>
        </form>
        </motion.div>
    );
};

export default ChatSidebar; 