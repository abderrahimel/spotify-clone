import  React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import "./Footer.css"

function Footer() {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [preview_url] = useState([])
    // reference
    preview_url.push('newelement')
    console.log(preview_url);

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
        <div className="footer">

            <div className="footer__left">
                <img 
                className="footer_albumLogo"
                src="https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a" alt="" />
                <div >alan waker</div>
             </div>
           
            
                      

            <div className="playSection">


                        <div className="control">

                                            <audio
                                            ref={audioPlayer}
                                            src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/a490d3c8-d685-4133-96cb-46579d959b3f/audio/6db8adb3-4ac6-4d9c-8857-03a91dfd2e49/default_tc.mp3"
                                                preload="metadata">   
                                                </audio>
                            
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
                           
           
       
            <div>
                control song
            </div>

          

        </div>
    )
}

export default Footer
