
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import React from 'react'
import Ticker from 'react-ticker';
import './VideoFooter.css'

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
              <div className='videoFooter_ticker'>
                <MusicNoteIcon className='videoFooter_icon'/>
                <Ticker mode='smooth'>
                  {({index}) => (
                    <>
                      <p>{song}</p>
                    </>
                  )}
                </Ticker>
            </div>
        </div>
        <img className='videoFooter_recording' src='https://i.pinimg.com/originals/77/97/19/7797190f0f3efd9d5b0b96963d97ed5a.gif' ></img>
    </div>
  )
}

export default VideoFooter