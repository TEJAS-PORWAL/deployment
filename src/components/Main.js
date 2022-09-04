import React from 'react'
import Video from '../images/start.mp4'
import './Main.css'

export default function Main() {
    const scrollyingUp = ()=>{
        let video = document.querySelector('video');
        window.scrollTo(0,video.clientHeight+10);
    }
    return (
        <main className='main'>
            <video src={Video} muted width={'100%'} height={'100%'} autoPlay onEnded={scrollyingUp}></video>
        </main>
    )
}