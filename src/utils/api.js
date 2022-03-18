
// moment date
import moment from "moment";

// Base URL RAWG API GAMES
const baseUrlRawg = `https://api.rawg.io/api`

// Date
const today = moment().format(`YYYY-MM-DD`);
const nextYear = moment().add(1, `year`).format(`YYYY-MM-DD`);
const lastYear = moment().subtract(1, 'years').format(`YYYY-MM-DD`);

// Popular Games
export const popularGames =
    `${baseUrlRawg}/games?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}&dates=${lastYear},${today}&ordering=-rating&page_size=10`;

// Upcoming Games
export const upcomingGames =
    `${baseUrlRawg}/games?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}&dates=${today},${nextYear}&ordering=-added&page_size=10`;

// New Games
export const newGames =
    `${baseUrlRawg}/games?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}&dates=${lastYear},${today}&ordering=-released&page_size=10`;

// Get Details Of The Game By ID. url/{id}
export const getDetailGameId = (game_id) =>
    `${baseUrlRawg}/games/${game_id}?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}`;

// Get ScreenShots By Id
export const getScreenShotsById = (game_id) =>
    `${baseUrlRawg}/games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}`;

// Searched Game
export const getSearchGame = (game_name) =>
    `${baseUrlRawg}/games?key=${process.env.REACT_APP_RAWG_API_SECRET_KEY}&search=${game_name}&page_size=10`;


