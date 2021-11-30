import React from 'react'
import './loading.css'

export default function Loading() {
    return (
        <div className = "container-loading">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
