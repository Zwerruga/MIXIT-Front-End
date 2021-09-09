import React, { memo, useState } from 'react'

export default memo(function VolumeButton({ player }) {
    const [isMuted, setIsMuted] = useState(false)

    const handleMute = () => {
        setIsMuted(isMuted => {
            isMuted ? player.target.unMute() : player.target.mute()
            return !isMuted
        })
    }

    return (
        <div className="control-btn volume-btn" onClick={handleMute} >
            <p className="volume-btn__title">{isMuted ? "Включить звук" : "Выключить звук"}</p>
            <div className="volume-btn__btn">
                {isMuted ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83333 6.08333V1.5L7.33333 3.58333M9.83333 13.5833V16.5L4.83333 12.3333H3.16667C2.24619 12.3333 1.5 11.5871 1.5 10.6667V7.33333C1.5 6.71643 1.83517 6.17781 2.33333 5.88964M1.5 1.5L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                    : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3333 6.49999C12.75 6.91666 13.1667 7.74999 13.1667 8.99999C13.1667 10.25 12.75 11.0833 12.3333 11.5M14.8333 4C16.0833 5.25 16.5 7.33333 16.5 8.99999C16.5 10.6666 16.0833 12.75 14.8333 14M9.83333 1.5L4.83333 5.66667H3.16667C2.24619 5.66667 1.5 6.41286 1.5 7.33333V10.6667C1.5 11.5871 2.24619 12.3333 3.16667 12.3333H4.83333L9.83333 16.5V1.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                }
            </div>
        </div>
    )
})
