import axios from 'axios';
import * as actionType from './actionTypes';


const getRoster = (roster, error) => ({
    type: actionType.GET_ROSTER,
    roster,
    error
});
/**
 * fetchRoster: Action
 * @returns true if success, false if error
 */
export const fetchRoster = () => {
    const url = "/api/getRoster";
    
    return dispatch => {
        return axios.get(url).then(response => {
            const data = response.data;
            dispatch(getRoster(data, ''));
            return true;
        }).catch(err => {
            console.error('Error:', err.message);
            dispatch(getRoster([], err.message));
            return false;
        });
    }
}
export const flushRoster = () => ({
    type: actionType.FLUSH_ROSTER,
})