import Navigation from "./components/Navigation"
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/SignUpPage"
import { Routes } from "react-router"
import { Route } from "react-router"

const App = () => {

    return (
        <main>
            {/* defining the various routes of the application */}
            <Navigation />
            <Routes>
                {/* this path to landing page */}
                <Route path="/" element={<LandingPage />} />
                {/* this path will lead to sign up page */}
                <Route path="/auth" element={<SignUpPage />} />
            </Routes>
        </main>
    )
}

export default App
