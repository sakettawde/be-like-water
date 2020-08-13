import React, { useState, useEffect } from 'react'
import Transition from '../comps/Transition'
import { Link } from 'react-router-dom'

const Landing = (props) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

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
            <Transition
                show={show}
                enter="transition ease-out duration-1000 transform delay-1000"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
            >
                <h1 className="p-3 font-semibold text-gray-500">
                    Be Like Water
                </h1>
            </Transition>
            <Link to="/about">
                <p>Go to /about</p>
            </Link>
        </div>
    )
}

export default Landing
