import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import './section.css'

function Section({key, img, name}) {
    const [mouse, setMouse] = useState(false) ;
    const mouseOver = () =>{
        setMouse(true)
    }

    const mouseLeave = () =>{
        // mouse leave
        setMouse(false)
    }

    return (
        <div className="section"  onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
             <div className="img-name">
                    <div className="image">
                        <img src={img} alt='' />
                    </div>

                    <div className="name">
                        {name}
                
                    </div>
             </div>
            

              <div>
        
                    { mouse &&
                        <button>
                            <FaPlay className="playbutton"/>
                        </button>
                    }
             </div>
            
        </div>
    )
}

export default Section
