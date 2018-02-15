import {
    FETCH_BREAK_JOURNEYS,
  } from '../constants/actionTypes';
  
  const initialState = {
    breakJourneyData: []
  };

const breakJourney = (state = [], action) => {
    switch (action.type) {
      case FETCH_BREAK_JOURNEYS:
        return action.payload.data;
      default:
        return state;
    }
  };
  
  export default breakJourney;
  