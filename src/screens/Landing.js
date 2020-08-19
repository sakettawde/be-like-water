import React, { useState, useEffect } from 'react'
import Transition from '../comps/Transition'
import { Link } from 'react-router-dom'

const sentence = [
    { id: 1, text: 'This is what it is ok...', startTime: 0 },
    { id: 2, text: 'I said emtpy your mind', startTime: 3000 },
    { id: 3, text: 'be formless, shapeless like water', startTime: 6800 },
    {
        id: 4,
        text: 'Now, you put water into a cup, it becomes the cup',
        startTime: 11500,
    },
    {
        id: 5,
        text: 'You put water into a bottle, it becomes the bottle',
        startTime: 15000,
    },
    {
        id: 6,
        text: 'You put into a teapot, it becomes the teapot',
        startTime: 18000,
    },
    { id: 7, text: 'Now water can flow, or it can crash', startTime: 21000 },
    { id: 8, text: 'Be water my friend', startTime: 26000 },
]

const Landing = (props) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        // setTimeout(() => {
        //     setShow(true)
        // }, 1000)
    }, [])

    const check = () => {
        const audio = document.getElementById('audioSource')
        audio.play()
        console.log(audio)
        setShow(!show)
    }

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
            <>
                {show && (
                    <h1 className="p-3 font-semibold text-gray-500">
                        {sentence.map((sentence, index) => {
                            const sentArr = sentence.text.split(' ')
                            return (
                                <>
                                    <TransitionSentence
                                        startTime={sentence.startTime}
                                        sentence={sentArr}
                                        index={index}
                                    />
                                    <br />
                                </>
                            )
                        })}
                    </h1>
                )}
                <button onClick={check}>Play</button>
                <audio controls>
                    {/* <audio id="audioSource"> */}
                    <source src="/assets/be-like-water.mp3" type="audio/mpeg" />
                </audio>
            </>
            {/* 
            <Link to="/about">
                <p>Go to /about</p>
            </Link> */}
        </div>
    )
}

const TransitionSentence = (props) => {
    const [show, setShow] = useState(false)
    const [toLeave, setToLeave] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, props.startTime)

        const timeToLeave = props.startTime + 200 * props.sentence.length + 3000
        setTimeout(() => {
            setToLeave(true)
        }, timeToLeave)
    }, [])

    return (
        <>
            {show && (
                <>
                    {props.sentence.map((word, index) => {
                        const gap = index === 0 ? '' : ' '
                        return (
                            <TransitionComp
                                toLeave={toLeave}
                                index={index}
                                text={gap + word}
                            />
                        )
                    })}
                </>
            )}
        </>
    )
}

const TransitionComp = (props) => {
    // const [textArr, setTextArr] = useState(['Be','like','water'])
    const [show, setShow] = useState(false)
    const duration = 200
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, duration * props.index)
    }, [])

    return (
        <Transition
            show={show && !props.toLeave}
            enter="transition ease-out duration-1000 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-1000 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <span>{props.text}</span>
        </Transition>
    )
}

export default Landing
