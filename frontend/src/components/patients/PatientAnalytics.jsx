import { motion } from "framer-motion";
import {
  HeartPulse,
  Thermometer,
  Droplet,
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

// Thresholds for conditional highlighting
const THRESHOLDS = {
    heartRate: { warning: 100, danger: 120 },
    temperature: { warning: 99.5, danger: 101.0 },
    bloodPressure: { warning: 130, danger: 150 },
    oxygenSaturation: { warning: 94, danger: 90 }, // Reverse scale
};

const PATIENT_DATA = [
{
    name: "Heart Rate",
    value: "75 bpm",
    numeric: 75,
    icon: HeartPulse,
    thresholds: THRESHOLDS.heartRate,
    unit: "bpm",
},
{
    name: "Temperature",
    value: "100.2 °F",
    numeric: 100.2,
    icon: Thermometer,
    thresholds: THRESHOLDS.temperature,
    unit: "°F",
},
{
    name: "Blood Pressure (Sys.)",
    value: "140 mmHg",
    numeric: 140,
    icon: Activity,
    thresholds: THRESHOLDS.bloodPressure,
    unit: "mmHg",
},
{
    name: "Oxygen Saturation",
    value: "92%",
    numeric: 92,
    icon: Droplet,
    thresholds: THRESHOLDS.oxygenSaturation,
    reverse: true,
    unit: "%",
},
];

const getSeverity = (value, thresholds, reverse = false) => {
    if (reverse) {
        if (value <= thresholds.danger) return "danger";
        if (value <= thresholds.warning) return "warning";
    } else {
        if (value >= thresholds.danger) return "danger";
        if (value >= thresholds.warning) return "warning";
    }
    return "normal";
};

const PatientAnalytics = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {PATIENT_DATA.map((item, index) => {
            const severity = getSeverity(
            item.numeric,
            item.thresholds,
            item.reverse
            );
            
            // Alternating blue and violet background colors
            const bgColors = [
                "bg-blue-900 bg-opacity-50 border-blue-700",
                "bg-violet-900 bg-opacity-50 border-violet-700", 
                "bg-blue-800 bg-opacity-50 border-blue-600",
                "bg-violet-800 bg-opacity-50 border-violet-600"
            ];
            const bgColor = bgColors[index % bgColors.length];

            return (
            <motion.div
                key={item.name}
                className={`${bgColor} backdrop-filter backdrop-blur-lg shadow-lg shadow-${bgColor}-500 rounded-xl p-6 `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-100">
                    {item.name}
                    </h3>
                    <p className="mt-1 text-2xl font-bold text-gray-100">
                    {item.value}
                    </p>
                </div>
                <div className="p-3 rounded-full bg-opacity-20 bg-gray-600">
                    <item.icon className="size-6 text-gray-200" />
                </div>
                </div>

                {severity !== "normal" && (
                <div
                    className={`mt-4 flex items-center gap-2 text-sm ${
                    severity === "danger"
                        ? "text-red-400"
                        : severity === "warning"
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                >
                    <AlertTriangle size="20" />
                    <span>
                    {severity === "danger"
                        ? "Critical"
                        : severity === "warning"
                        ? "Elevated"
                        : ""}
                    </span>
                </div>
                )}
            </motion.div>
            );
        })}
        </div>
    );
};

export default PatientAnalytics;
