import React, { useRef } from 'react'
import InputWithRef from './InputWithRef'

const ExUseRef = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div><h1>useRef</h1>
            <InputWithRef ref={inputRef}></InputWithRef>
            <button onClick={handleClick}>Focus le ref</button>
        </div>
    )
}

export default ExUseRef