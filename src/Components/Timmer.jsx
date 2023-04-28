import React, { useEffect, useRef, useState } from 'react'
import './Timmer.css'

const Timmer = () => {
    const [timer, settimer] = useState(0)
    let timerId = useRef(null) // timmerId={current:null}
    let h2Ref = useRef(null) // timmerId={current:null} //   const h2Ref= document.getElementById("timer")
    let startButton = useRef(null)
    let stopButton = useRef(null)
    useEffect(() => {

        if (timer === 0) {

            h2Ref.current.innerText = `Timer Value is ${timer}`
            h2Ref.current.style.color = "black"
        } else {

            h2Ref.current.innerText = `Timer Started & Value is ${timer}`
            h2Ref.current.style.color = "red"
        }

    })
    // useEffect(() => {
    //     const h2Ref= document.getElementById("timer")
    //     if(timer===0){
    //         h2Ref.innerText=`Timer Value is ${timer}`
    //     }else{
    //         h2Ref.innerText=`Timer Started & Value is ${timer}`
    //     }

    // })


    const startTimer = () => {
        startButton.current.disabled = true;
        stopButton.current.disabled = false;
        // h2Ref.current.style.color = "orange"
        timerId.current = setInterval(() => {
            settimer((pretimer) => pretimer + 1)
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(timerId.current)
        h2Ref.current.style.color = "orange"

        startButton.current.disabled = false
        stopButton.current.disabled = true

    }
    return (
        <div className='Timmer'>
            <h1 id='timer' ref={h2Ref}>Timmer value is {timer}</h1>
            <button onClick={startTimer} ref={startButton}>Start</button>
            <button onClick={stopTimer} ref={stopButton}>Stop</button>
        </div>
    )
}

export default Timmer