import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PortfolioPage from "./pages/PortfolioPage";
import ComponentsPage from "./pages/ComponentsPage";
import UseStatePage from "./pages/UseStatePage";
import EventHandlingPage from "./pages/EventHandlingPage";
import ConditionalRenderingPage from "./pages/ConditionalRenderingPage";

import "./App.css";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* Main Dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* Individual Learning Topics */}
                <Route path="/portfolio" element={<PortfolioPage />} />

                <Route path="/components" element={<ComponentsPage />} />

                <Route path="/use-state" element={<UseStatePage />} />

                <Route path="/event-handling" element={<EventHandlingPage />} />

                <Route path="/conditional-rendering" element={<ConditionalRenderingPage />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;