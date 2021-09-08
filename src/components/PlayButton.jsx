import React, { memo, useEffect, useState } from 'react'
import { throttle } from '../utils/throttle.js'
import { useWindowSize } from '../utils/useWindowSize.js'


export default memo(function PlayButton({ isPlayed = false, onClick = () => { }, parentNode }) {
    const [style, setStyle] = useState({ top: `45%`, left: `20%` })
    const size = useWindowSize()

    useEffect(() => {
        const handleMouseMove = throttle((e) => {
            setStyle({ top: `${e.pageY}px`, left: `${e.pageX}px` })
        }, 50)
        if (size.width > 786) parentNode.addEventListener("mousemove", handleMouseMove)
        return () => parentNode.removeEventListener("mousemove", handleMouseMove)
    }, [size.width, setStyle, parentNode])

    return (
        <div className="control-btn play-btn" onClick={onClick} style={style}>
            <p className="play-btn__title">смотреть видео</p>
            <div className="play-btn__btn">
                {!isPlayed ? <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L1 16.6L14 8.8L1 1Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="4" width="3" height="15" rx="1.5" fill="white" />
                    <rect x="6" y="4" width="3" height="15" rx="1.5" fill="white" />
                </svg>
                }
            </div>
        </div>
    )
})
