import { useEffect } from "react";



const useListenToResize = (setWindowWidthgi) => {

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowWidth]);
}

export default useListenToResize;