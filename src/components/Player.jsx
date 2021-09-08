import React, { memo, useState, useRef } from 'react'
import YouTube from 'react-youtube';

import PlayButton from './PlayButton.jsx'
import VolumeButton from './VolumeButton.jsx'

export default memo(function Player() {
    const [player, setPlayer] = useState(null)
    const [isMuted, setIsMuted] = useState(false)

    const contollersLayerRef = useRef(null)

    const handleClick = (e) => {
        player.data !== 1 ? player.target.playVideo() : player.target.pauseVideo()
    }
    const handleMute = (e) => {
        setIsMuted(isMuted => {
            isMuted ? player.target.unMute() : player.target.mute()
            return !isMuted
        })
    }
    return (
        <div className={`player ${player && player.data === 1 ? 'active' : ''}`} >
            <div className="contollers-layer" ref={contollersLayerRef} >
                {player && <PlayButton isPlayed={player.data === 1} parentNode={contollersLayerRef.current} onClick={handleClick} />}
                <VolumeButton isMuted={isMuted} onClick={handleMute} />
            </div>
            <YouTube
                className={`video`}
                containerClassName={"video-container"}
                opts={{ playerVars: { controls: 2, iv_load_policy: 3, loop: 1, modestbranding: 1, showinfo: 0, start: 1, rel: 0 } }}
                onStateChange={(e) => setPlayer(e)}
                onReady={(e) => setPlayer(e)}
                videoId={"ReTGM_h52q0"} />
        </div>
    )
})
