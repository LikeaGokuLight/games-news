// Axios
import axios from "axios";
// Utils url
import {getSearchGame, newGames, popularGames, upcomingGames} from "../utils/api";

// Fetch All Games
export const loadGames = () => async (dispatch) => {

    const popularData = await axios.get(popularGames);
    const upcomingData = await axios.get(upcomingGames);
    const newGamesData = await axios.get(newGames);

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    });

};

// Fetch Searched Games
export const fetchSearch = (game_name) => async (dispatch) => {

    const searchedData = await axios.get(getSearchGame(game_name));

    dispatch({
        type: 'FETCH_SEARCHED_GAME',
        payload: {
            searched: searchedData.data.results
        }
    });

};




