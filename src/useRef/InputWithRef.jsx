import React from 'react'
import { forwardRef } from 'react';



const InputWithRef = forwardRef(function InputWithRef(props, ref) {
    return (
        <div>
            <input  ref={ref}></input>
        </div>
    )
}
);

export default InputWithRef