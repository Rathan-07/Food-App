// useOnline.js
import { useEffect, useState } from "react";
// import "./useOnline.css"; // Import CSS file

const useOnline = () => {
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setOnline(true);
        };

        const handleOffline = () => {
            setOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
};

export default useOnline;
