import {
    FETCH_BREAK_JOURNEYS,
  } from '../constants/actionTypes';
  
  const initialState = {
      breakJourneyData: [{lat: 22.533, long: 50.456, time: "07:25"}]
  };

  const breakJourney = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BREAK_JOURNEYS:
        return state;
      default:
        return state;
    }
  };
  
  export default breakJourney;
  