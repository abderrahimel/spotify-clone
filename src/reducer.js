export const initialState = {
  // remove after developing
    token: null, 
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
  };

  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
      case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };
  
      case "SET_PLAYLISTS":
              return {
                ...state,
                playlists: action.playlists,
              };

        case "SET_DISCOVER_WEEKLY":
                return {
                  ...state,
                  discover_weekly: action.discover_weekly,
                }

      default:
        return state;
    }
  };
  
  export default reducer;