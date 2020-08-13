import React from 'react'
import { Link } from 'react-router-dom'

const About = (props) => {
    return (
        <div
            style={{
                backgroundColor: '#eee',
                height: '100vh',
                width: '100vw',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <h1 className="p-3 font-semibold text-gray-500">Be Like Water</h1>
            <p>This is like another page</p>
            <Link to="/">
                <p>Go back</p>
            </Link>
        </div>
    )
}

export default About
