import React from 'react'
// import { FaPlay } from "react-icons/fa";
import "./SongRow.css"
import { Link } from "react-router-dom";

function SongRow({ track }) {
   
  const reduce = (string, n) => {
        return string.length < n ? string: string.substring(0, n - 1 ) + '...'
  }

  
    return (
        <div className="songRow">
            
            <div className="infoRow">

                        <img 
                        className="songRow__album"
                        src={track.album.images[0].url} alt="" />

                        <div className="songRow__info">
                                <h3>{reduce(track.name, 20)}</h3>
                                <p>
                                    {reduce(track.artists.map((artist) =>artist.name).join(","), 40)}
                                    {reduce(track.album.name, 5)}
                                </p>
                        </div>
            </div>

            <div>

            <Link to="/album" className="linek" >
               {reduce(track.name, 30)}
            </Link>
           
            </div>

            <div>
            <p> il y a 19 jours</p>
             </div>   

             <div>
             <p> time</p>
             </div>
            
        </div>
    )
}

export default SongRow


