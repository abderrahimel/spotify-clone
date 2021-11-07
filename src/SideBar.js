import React from 'react'
import './SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import { Link } from "react-router-dom";

function SideBar() {
    const { playlists } = useDataLayerValue();

    
    return (
        <div className="sideBar">
            <img 
            className="sideBar__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU" alt="" />
             <Link to="/home" className="linek" >
             <SideBarOption Icon={HomeIcon} title="Home"/>
            </Link>
            <SideBarOption Icon={SearchIcon} title="Search"/>
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
           {
               playlists?.items?.map((playlist)=>(
               
                  <SideBarOption title={playlist.name} />
               ))}

        </div>
    )
}

export default SideBar
