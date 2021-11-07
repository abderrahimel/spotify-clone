import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { FaPause } from "react-icons/fa";

function Body({ spotify }) {
    const [{discover_weekly}] = useDataLayerValue()

    discover_weekly?.tracks.items.map((item)=>(
        console.log(item.track)
    ))

    return (
        <div className="body">

            <Header spotify={spotify}/>
            <div className="body__info"  >
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                  <button className="playPause"> <FaPause  className="pauseIcon" />  </button>
                    <FavoriteIcon fontSize="large"  />
                    <MoreHorizIcon/>

                </div>
                  <div className="headerTable">
                      <p>TITRE</p>
                      <p>ALBUM</p>
                      <p> AJOUTE LE</p>
                      <p>ICON</p>
                  </div>
                  <hr />
                {
                    discover_weekly?.tracks.items.map((item)=>(
                        <SongRow track={item.track}  className="Row"/>
                    ))
                }
            </div>
         <div>
                  
                                
         </div>
                

        </div>
    )
}

export default Body
