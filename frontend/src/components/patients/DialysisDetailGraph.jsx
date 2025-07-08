import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { parseDate } from "@internationalized/date";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const DialysisDetailGraph = () => {
    const [selectedDate, setSelectedDate] = useState(parseDate("2024-07-06"));

    // Mock data for different dates
    const dialysisData = {
        "2024-07-06": {
        flowRate: [
            { time: "08:00", value: 280 },
            { time: "09:00", value: 295 },
            { time: "10:00", value: 310 },
            { time: "11:00", value: 300 },
            { time: "12:00", value: 290 },
            { time: "13:00", value: 305 },
            { time: "14:00", value: 315 },
            { time: "15:00", value: 300 },
        ],
        totalVolume: [
            { time: "08:00", value: 0 },
            { time: "09:00", value: 16.8 },
            { time: "10:00", value: 33.6 },
            { time: "11:00", value: 50.4 },
            { time: "12:00", value: 67.2 },
            { time: "13:00", value: 84.0 },
            { time: "14:00", value: 100.8 },
            { time: "15:00", value: 117.6 },
        ],
        temperature: [
            { time: "08:00", value: 36.8 },
            { time: "09:00", value: 37.0 },
            { time: "10:00", value: 37.2 },
            { time: "11:00", value: 37.1 },
            { time: "12:00", value: 37.3 },
            { time: "13:00", value: 37.2 },
            { time: "14:00", value: 37.4 },
            { time: "15:00", value: 37.3 },
        ],
        },
        "2024-07-07": {
        flowRate: [
            { time: "08:00", value: 290 },
            { time: "09:00", value: 305 },
            { time: "10:00", value: 320 },
            { time: "11:00", value: 310 },
            { time: "12:00", value: 300 },
            { time: "13:00", value: 315 },
            { time: "14:00", value: 325 },
            { time: "15:00", value: 310 },
        ],
        totalVolume: [
            { time: "08:00", value: 0 },
            { time: "09:00", value: 17.4 },
            { time: "10:00", value: 34.8 },
            { time: "11:00", value: 52.2 },
            { time: "12:00", value: 69.6 },
            { time: "13:00", value: 87.0 },
            { time: "14:00", value: 104.4 },
            { time: "15:00", value: 121.8 },
        ],
        temperature: [
            { time: "08:00", value: 36.9 },
            { time: "09:00", value: 37.1 },
            { time: "10:00", value: 37.3 },
            { time: "11:00", value: 37.2 },
            { time: "12:00", value: 37.4 },
            { time: "13:00", value: 37.3 },
            { time: "14:00", value: 37.5 },
            { time: "15:00", value: 37.4 },
        ],
        },
    };

    const formatDate = (date) => {
        return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
    };

    const displayDate = (date) => {
        return `${String(date.day).padStart(2, '0')}/${String(date.month).padStart(2, '0')}/${date.year}`;
    };

    const currentData = dialysisData[formatDate(selectedDate)] || dialysisData["2024-07-06"];

    // Merge the three arrays by time
    const mergedData = currentData.flowRate.map((item, idx) => ({
        time: item.time,
        flowRate: item.value,
        totalVolume: currentData.totalVolume[idx]?.value,
        temperature: currentData.temperature[idx]?.value,
    }));

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
            <p className="text-sm text-gray-600">{`Time: ${label}`}</p>
            {payload.map((entry, index) => (
                <p key={index} className="text-sm" style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}`}
                </p>
            ))}
            </div>
        );
        }
        return null;
    };

    return (
        <motion.div
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Dialysis Session History</h3>
            <Popover placement="right">
            <PopoverTrigger>
                <Button color="primary" className="font-medium">
                {displayDate(selectedDate)}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Calendar
                aria-label="Select date for dialysis history"
                value={selectedDate}
                onChange={setSelectedDate}
                className="w-full"
                />
            </PopoverContent>
            </Popover>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 relative">
            <h4 className="text-md font-medium text-gray-700 mb-3">Dialysis Parameters Throughout the Day</h4>
            <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mergedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                <YAxis yAxisId="left" stroke="#3b82f6" fontSize={12} domain={[250, 350]} tick={{ fill: '#3b82f6' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={12} domain={[0, 130]} tick={{ fill: '#10b981' }} />
                <YAxis yAxisId="temp" orientation="right" stroke="#f59e0b" fontSize={12} domain={[36.5, 37.8]} tick={{ fill: '#f59e0b' }} hide />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="flowRate" 
                    name="Flow Rate (ml/min)"
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.15}
                    strokeWidth={2}
                />
                <Area 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="totalVolume" 
                    name="Total Volume (L)"
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.15}
                    strokeWidth={2}
                />
                <Area 
                    yAxisId="temp"
                    type="monotone" 
                    dataKey="temperature" 
                    name="Temperature (°C)"
                    stroke="#f59e0b" 
                    fill="#f59e0b" 
                    fillOpacity={0.15}
                    strokeWidth={2}
                />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
        </motion.div>
    );
};

export default DialysisDetailGraph;
