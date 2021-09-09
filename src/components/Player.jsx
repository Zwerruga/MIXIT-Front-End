import React, { memo, useState } from 'react'
import YouTube from 'react-youtube';

import PlayButton from './PlayButton.jsx'
import VolumeButton from './VolumeButton.jsx'

export default memo(function Player() {
    const [player, setPlayer] = useState(null)

    return (
        <div className={`player ${player?.data === 1 ? 'active' : ''}`} >
            <div className="contollers-layer" >
                <PlayButton player={player} />
                <VolumeButton player={player} />
            </div>
            <YouTube
                className={`video`}
                containerClassName={"video-container"}
                opts={{ playerVars: { controls: 2, iv_load_policy: 3, loop: 1, modestbranding: 1, showinfo: 0, start: 1, rel: 0 } }}
                onStateChange={setPlayer}
                onReady={setPlayer}
                videoId={"ReTGM_h52q0"} />
        </div>
    )
})
