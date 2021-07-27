import { BOOKING_TYPE_DATA } from './booking.data';
import { BookingActionType } from './booking.types';

import { minusAndRemoveGuests } from './booking.utils';

// import { toalGuests } from './booking.utils';
const INITIAL_STATE = {
  collection: BOOKING_TYPE_DATA,
  hidden: true,
  guest: 0,
  adult: 0,
  infant: 0,
  startDay: null,
  endDay: null,
  stayDate: 0,
  totalprice: 0,
  eachHotelValues: 0,
};
const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookingActionType.HOTEL_VALUE:
      return {
        ...state,
        eachHotelValues: action.payload,
      };
    case BookingActionType.TOTAL_PRICE:
      return {
        ...state,
        totalprice: state.stayDate * state.eachHotelValues.fee,
        // totalprice: calculateTotal(state.stayDate, state.eachHotelValues),
      };
    case BookingActionType.BOOKING_CALENDER_DATE:
      return {
        ...state,
        startDay: action.payload
          ? action.payload.start
          : state.booking.startDay,
        endDay: action.payload ? action.payload.end : state.booking.endDay,
        stayDate: Math.floor(action.payload.stayDate),
      };
    case BookingActionType.TOGGLE_PEOPLE_MODAL_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    // case BookingActionType.TOGGLE_PEOPLE_MODAL_EXIT:
    //   return {
    //     ...state,
    //     hidden: true,
    //   };
    case BookingActionType.PLUS_ADULT_GUEST:
      return {
        ...state,
        adult: state.adult + 1,
      };

    case BookingActionType.PLUS_CHILD_GUEST:
      return {
        ...state,
        guest: state.guest + 1,
      };
    case BookingActionType.PLUS_INFANT_GUEST:
      return {
        ...state,
        infant: state.infant + 1,
      };
    case BookingActionType.MINUS_ADULT_GUEST:
      return {
        ...state,
        adult: minusAndRemoveGuests(state.adult, action.payload),
        // adult: state.adult == 1 ? 0 : state.adult - 1,
      };
    case BookingActionType.MINUS_CHILD_GUEST:
      return {
        ...state,
        guest: minusAndRemoveGuests(state.guest, action.payload),
        // guest: state.guest == 1 ? 0 : state.guest - 1,
      };
    case BookingActionType.MINUS_INFANT_GUEST:
      return {
        ...state,
        infant: minusAndRemoveGuests(state.infant, action.payload),
        // infant: state.infant == 1 ? 0 : state.infant - 1,
      };
    default:
      return state;
  }
};

export default bookingReducer;
