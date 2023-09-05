import React from 'react'
import { useState, createRef } from 'react';

//Video player
import { DefaultPlayer as VideoPlayer } from 'react-html5video'
import 'react-html5video/dist/styles.css'

import './VideoLibrary.css'

//media files
import img1 from '../Videos/Video1.png';
import video1 from '../Videos/Video1.mp4';
import img2 from '../Videos/Video2.png';
import video2 from '../Videos/Video2.mp4';
import img3 from '../Videos/Video3.png';
import video3 from '../Videos/Video3.mp4';


function VideoLibrary() {

    const [modal, setModal] = useState(false);



    let data = [
        {
            id: 1,
            poster: img1,
            videoUri: video1
        },
        {
            id: 2,
            poster: img2,
            videoUri: video2
        },
        {
            id: 3,
            poster: img3,
            videoUri: video3
        },

    ]

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Video Library</h1>
            <div className='library'>
                {data.map((item, index) => {
                    let divRef = createRef(null);
                    const openModal = () => {
                        divRef.current.classList.remove('video');
                        divRef.current.classList.add('modal')
                        setModal(true)
                    }
                    const closeModal = () => {
                        divRef.current.classList.add('video');
                        divRef.current.classList.remove('modal')
                        setModal(false)
                    }

                    return (
                        <div ref={divRef} className="video" key={index}>
                            {modal && <button className='modal-close-btn' onClick={() => closeModal()}>X</button>}
                            <div className="video-container" onClick={() => openModal()}>
                                <VideoPlayer style={{ width: '100%' }}
                                    autoplay={modal}
                                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                    poster={item.poster}
                                >
                                    <source src={item.videoUri}
                                        type="video/webm"
                                    />
                                </VideoPlayer>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoLibrary