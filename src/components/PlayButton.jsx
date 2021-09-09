import React, { memo, useEffect, useRef } from 'react'

import { throttle } from '../utils/throttle.js'
import { useWindowSize } from '../utils/useWindowSize.js'

export default memo(function PlayButton({ player }) {
    const playBtn = useRef(null)
    const size = useWindowSize()

    const handleClick = (e) => {
        player && player.data !== 1 ? player?.target.playVideo() : player?.target.pauseVideo()
    }

    useEffect(() => {
        const handleMouseMove = throttle((e) => {
            playBtn.current.style.top = `${e.pageY}px`
            playBtn.current.style.left = `${e.pageX}px`
        }, 30)

        if (size.width > 768) document.addEventListener("mousemove", handleMouseMove)

        return () => document.removeEventListener("mousemove", handleMouseMove)
    }, [size.width])

    return (
        <div className="control-btn play-btn" onClick={handleClick} ref={playBtn}>
            <p className="play-btn__title">смотреть видео</p>
            <div className="play-btn__btn">
                {player?.data !== 1 ? <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
