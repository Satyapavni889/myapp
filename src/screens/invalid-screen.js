import React from 'react'
import { useNavigate } from 'react-router-dom'

const Invalid = () => {
    const navigate = useNavigate()
    const handleRedirection = () => {
        const isRedirect = true;
        if (isRedirect) {
            navigate("/")
        }
        else {

        }
        navigate("/")
    }
    return (
        <div>
            <h2>You have lost </h2>
            <button onClick={handleRedirection} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Back to home</button>
        </div>
    )
}

export default Invalid
