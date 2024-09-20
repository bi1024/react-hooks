import React from 'react'

const InputWithRef = ({ inputRef }) => {
    return (
        <div>
            <input ref={inputRef}></input>
        </div>
    )
}

export default InputWithRef