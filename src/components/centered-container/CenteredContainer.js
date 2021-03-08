import React from 'react'
import "./centeredContainer.css"
const CenteredContainer = ({children}) => {
    return (
        <div className="cc-main flex-center">
            <div className="cc-inner flex-center flex-columns">
            {children}
            </div>
        </div>
    )
}

export default CenteredContainer
