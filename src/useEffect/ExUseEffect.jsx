import { useEffect } from "react";
import { useState } from "react";
import useListenToResize from "./useListenToResize";

const ExUseEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowWidth2, setWindowWidth2] = useState(window.innerWidth);

    useEffect(() => {
        function handleMove(e) {

            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useListenToResize(setWindowWidth2);

    return (<>
        <h1>useEffect (listening to mouse move)</h1>
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }} />
        <h1>useEffect (listening to resize)</h1>
        <div>width:{windowWidth}</div>
        <h1>useEffect (listening to resize, in custom hook)</h1>
        <div>width:{windowWidth2}</div>
    </>
    );
}

export default ExUseEffect