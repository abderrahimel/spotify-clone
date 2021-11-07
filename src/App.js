import './App.css';
import React, { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Album from './Album';
import Home from './Home';


const spotify = new SpotifyWebApi();
   

function App() {
  const [{ token, user, discover_weekly }, dispatch] = useDataLayerValue();
  

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;
    
    if (_token) {
      spotify.setAccessToken(_token);
 
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
     
    // Get the authenticated user
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
    // https://open.spotify.com/playlist/37i9dQZEVXcIJazRV9ISoM
    spotify.getPlaylist('37i9dQZF1DWSf2RDTDayIx').then(response =>{
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    })
  }, [token, dispatch]);
  //  we call this two varable from dataLayer
  console.log('user ==>', user);
  console.log("the token is " +token);
  console.log("getPlaylist:"+discover_weekly);

  return (
    <Router>
        <div className="app">

                <Switch>
                  
                          {!token && 
                          <Route  path="/login">
                                  <Login/>
                          </Route>

                            }
               
                  
                          {token && 
                                 <Route  exact path="/">
                                  <Player spotify={spotify} /> 
                                    
                                 </Route>
                           
                           }
                          { token &&
                            <Route exact path="/album">
                                <Album/>
                               
                           
                            </Route>
                          }
                          
                          { token &&
                            <Route exact path="/home">   

                                     <Home spotify={ spotify } />
                            
                            </Route>
                          }
                          
                  </Switch>
        </div>
    </Router>
  );
}

export default App;