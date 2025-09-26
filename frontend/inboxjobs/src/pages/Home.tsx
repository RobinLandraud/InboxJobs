import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main>
            <h1>Welcome to InboxJobs</h1>
        </main>
    );
};

export default Home;