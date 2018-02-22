import {
    FETCH_BREAK_JOURNEYS, CHECKIN
  } from '../constants/actionTypes';
  
  const initialState = {
    breakJourneyData: []
  };

const breakJourney = (state = [], action) => {
    switch (action.type) {
      case FETCH_BREAK_JOURNEYS:
        return action.payload.data;
      case CHECKIN:
      let stateClone = Object.assign([], state);
        let bjIndex = stateClone.findIndex(x => x.id === action.payload.data.id);
        if(bjIndex !== -1)
          stateClone[bjIndex] = action.payload.data;
        return stateClone;
      default:
        return state;
    }
  };
  
  export default breakJourney;
  