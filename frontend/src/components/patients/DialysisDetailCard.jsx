import React from "react";
import { motion } from "framer-motion";
import { Droplets, Thermometer, Gauge, Activity } from "lucide-react";

const DialysisDetailCard = () => {
  // Mock current dialysis data
  const currentDialysisData = {
    flowRate: "300 ml/min",
    totalVolume: "45.2 L",
    temperature: "37.2°C",
    systemStatus: "normal", // normal, warning, danger
    sessionDuration: "2h 15m",
    remainingTime: "45m"
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
        return "text-green-400 bg-green-100";
      case "warning":
        return "text-yellow-400 bg-yellow-100";
      case "danger":
        return "text-red-400 bg-red-100";
      default:
        return "text-gray-400 bg-gray-100";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "normal":
        return "Normal";
      case "warning":
        return "Warning";
      case "danger":
        return "Critical";
      default:
        return "Unknown";
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Current Dialysis Session</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(currentDialysisData.systemStatus)}`}>
          {getStatusText(currentDialysisData.systemStatus)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Flow Rate */}
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Droplets className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Flow Rate</p>
            <p className="text-lg font-semibold text-gray-800">{currentDialysisData.flowRate}</p>
          </div>
        </div>

        {/* Total Volume */}
        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
          <div className="p-2 bg-green-100 rounded-lg">
            <Gauge className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Volume</p>
            <p className="text-lg font-semibold text-gray-800">{currentDialysisData.totalVolume}</p>
          </div>
        </div>

        {/* Temperature */}
        <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Thermometer className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="text-lg font-semibold text-gray-800">{currentDialysisData.temperature}</p>
          </div>
        </div>

        {/* Session Duration */}
        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Activity className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="text-lg font-semibold text-gray-800">{currentDialysisData.sessionDuration}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Session Progress</span>
          <span>{currentDialysisData.remainingTime} remaining</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: '75%' }} // Mock progress - 75% complete
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default DialysisDetailCard;
