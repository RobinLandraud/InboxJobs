import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import useAuth from "./hooks/useAuth";
import Loader from "./components/Loader";

const App: React.FC = () => {
    const { initialized } = useAuth();

    if (!initialized) {
        return <Loader />;
    }

    return (
        <Router>
            <Header />
            <AppRoutes />
        </Router>
    );
};

export default App;