import React from 'react'
import Component from './Component';
import { TemplateContext } from './context'

const ExUseContext = () => {



    return (
        <>
            <h1>useContext</h1>
            <TemplateContext.Provider value='abc'>
                Using value provided by context
                <div>
                    <Component></Component>
                </div>
            </TemplateContext.Provider>
            Using default value in createContext
            <Component></Component>
        </>
    )
}

export default ExUseContext