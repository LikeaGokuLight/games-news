// Axios
import axios from "axios";
// Utils url
import {getDetailGameId, getScreenShotsById} from "../utils/api";

// Fetch Game Detail By ID
export const loadGameDetailById = (id) => async (dispatch) => {

    dispatch({
        type: 'LOADING_DETAIL'
    });

    const gameDetail = await axios.get(getDetailGameId(id));
    const gameScreenShots = await axios.get(getScreenShotsById(id));

    dispatch({
        type: 'FETCH_GAME_DETAIL_BY_ID',
        payload: {
            game: gameDetail.data,
            screenShots: gameScreenShots.data.results
        }
    });

};