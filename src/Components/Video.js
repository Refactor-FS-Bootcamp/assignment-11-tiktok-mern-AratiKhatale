import React, { useRef, useState } from "react"
import './Video.css'
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"


const Video = ({ url , channel, description, song, likes, share, messages }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
            if(playing){
                videoRef.current.pause()
                setPlaying(false)
            } else{
                videoRef.current.play()
                setPlaying(true)
            }
    }
    return (
        <div className="video">
            <video
                className="video__player1"
                loop 
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
            >
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes}  share={share} messages={messages}/>
        </div>
    )
}

export default Video