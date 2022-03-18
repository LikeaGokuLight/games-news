// Axios
import axios from "axios";

export const fetchAllUsers = () => async (dispatch) => {

    const allUsersData = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({

        type: 'FETCH_ALL_USERS',
        payload: {
            users: allUsersData.data
        }
    })

};