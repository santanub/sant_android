import { createAction } from 'redux-actions';
import { FETCH_BREAK_JOURNEYS, CHECKIN } from '../constants/actionTypes';
import { fetch_data, checkin } from '../api/break_journeys';

const loadBJSuccess = createAction(FETCH_BREAK_JOURNEYS);
const checkIbBJ = createAction(CHECKIN);

export function loadBJs() {
    return(dispatch) => {
      return fetch_data()
        .then(payload => {
          dispatch(loadBJSuccess(payload))
        });
    }
}

export function checkinBJ(id) {
    return(dispatch) => {
      return checkin(id)
        .then(payload => {
          dispatch(checkIbBJ(payload))
        });
    }

}
