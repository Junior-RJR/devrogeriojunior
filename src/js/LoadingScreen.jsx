import { useState, useEffect } from "react";
import "../css/LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onFinish) {
                onFinish(); 
            }
        }, 4000);

        return () => clearTimeout(timer); 
    }, [onFinish]);

    if (!visible) return null; 

    return (
        <div className="loading-screen">
            <div className="diamond"></div>
        </div>
    );
};

export default LoadingScreen;
