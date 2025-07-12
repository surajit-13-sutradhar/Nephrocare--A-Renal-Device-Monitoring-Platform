import Navigation from "./components/Navigation"
import DoctorDashboardPage from "./pages/DoctorDashboardPage"
import PatientDashboard from "./pages/PatientDashboard"
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/SignUpPage"
import { Routes } from "react-router"
import { Route } from "react-router"
import LoginPage from "./pages/LoginPage"
import DeviceDetailPage from "./pages/DeviceDetailPage"

const App = () => {

    return (
        <main>
            {/* defining the various routes of the application */}
            <Navigation />
            <Routes>
                {/* this path to landing page */}
                <Route path="/" element={<LandingPage />} />
                {/* this path will lead to sign up page */}
                <Route path="/sign-up" element={<SignUpPage />} />
                {/* login page */}
                <Route path="/log-in" element={<LoginPage />} />
                {/* Doctor Dashboard page */}
                <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />
                {/* Patient Dashboard page */}
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                {/* Device Detail page */}
                <Route path="/device/:deviceId" element={<DeviceDetailPage />} />
            </Routes>
        </main>
    )
}

export default App
