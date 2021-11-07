import  React, { useState, useRef, useEffect } from 'react';
import  "./AudioPlayer.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

const AudioPlayer = () => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    // reference
     const audioPlayer = useRef(); // reference our audio component
     const progressBar = useRef(); // reference our progress bar time
     const animationRef = useRef();// reference the animation

     const [duration, setDuration] = useState(0);
     const [currentTime, setCurrentTime] = useState(0);
    //  useEffect doesn't update every second so we need a function 
    // because we have a broblem when we change the time of progress bar the audio doesn't change
    useEffect(()=>{
        // convert the duration from float to decimal
        const seconds = Math.floor(audioPlayer.current.duration);
       setDuration(seconds);
       progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
    //    this we  use to have minite : seconds like 2:03 of time listened in audio
     const calculateTime = (secs) =>{

         const minutes = Math.floor(secs / 60);

         const returnedMinutes = minutes < 10 ? `0${minutes}`: `${minutes}`;

         const seconds = Math.floor(secs % 60);

         const returnedSeconds = seconds < 10 ? `0${seconds}`: `${seconds}`;

         return `${returnedMinutes}:${returnedSeconds}`;

     }


   const togglePlayPause = () =>{
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if(!prevValue){
            audioPlayer.current.play();
            // the function animation that run every seconds good than useEffect take as parameter name of
            //  function we want to run
            animationRef.current = requestAnimationFrame(whilePlaying)
    }else{
            audioPlayer.current.pause();
            // here we stop the function animation frame with reference 
            cancelAnimationFrame(animationRef)
    } 
   }

   const whilePlaying = ()=> {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
    //   here we tell to function animation to call itself to be recurrsive
    // it will call  whilePlaying
    animationRef.current = requestAnimationFrame(whilePlaying)
   }
   const changeRange = () =>{
    //  we target the property currentTime by default available in audio tag
    // and set the current time of audio to be the current value of progressBar
    audioPlayer.current.currentTime = progressBar.current.value;
    // now we target the  variable of css style to change
    changePlayerCurrentTime()
   }

const changePlayerCurrentTime = () =>{
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
}


    return (
        <div className="audioPlayer">
            <audio
            ref={audioPlayer}
            src="https://p.scdn.co/mp3-preview/9c636a653ea77643ab9d9e9c0b8b6b3457c0ebef?cid=8333c85ad4ab44528fea5a6d2507ff76"
                preload="metadata">   </audio>

             <div className="playSection">
                        <div className="control">
                                            <ShuffleIcon className="footer__green"/>
                                            <SkipPreviousIcon className="footer__icon"/>

                                            <button onClick={togglePlayPause} className="playPause"> {(isPlaying && duration !== currentTime ) ? <FaPause className="play" /> : <FaPlay className="play" /> }   </button>

                                            <SkipNextIcon className="footer__icon"/>
                                                <RepeatIcon className="footer__green"/>
                        </div>

                
                                   <div className="inputTime">
                                            {/* current time */}
                                            <div>{calculateTime(currentTime)}</div>

                                            
                                                <input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange}/>
                                            

                                            {/*duration  */}
                                            <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div> 
                                   </div>

          

             </div>
                           
           
        </div>
    )
}

export  {AudioPlayer}
