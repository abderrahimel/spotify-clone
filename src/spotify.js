export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/";

// 1. click login button
// 2 . redirect to spotify login page 
// 3 . Redirect to home page once logged
// from DashBoard spotify for developers
const ClientID =  '8333c85ad4ab44528fea5a6d2507ff76'
// the otorization that user will have 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//  #access_token=
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item)=>{
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

// the loginUrl is 
export const loginUrl = `${authEndpoint}?client_id=${ClientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;