import { BookingActionType } from './booking.types';

export const tooglePeopleModalHidden = () => ({
  type: BookingActionType.TOGGLE_PEOPLE_MODAL_HIDDEN,
});
export const plusAdultGuest = adult => ({
  type: BookingActionType.PLUS_ADULT_GUEST,
  payload: adult,
});
export const minusAdultGuest = adult => ({
  type: BookingActionType.MINUS_ADULT_GUEST,
  payload: adult,
});
export const plusChildGuest = guest => ({
  type: BookingActionType.PLUS_CHILD_GUEST,
  payload: guest,
});
export const minusChildGuest = guest => ({
  type: BookingActionType.MINUS_CHILD_GUEST,
  payload: guest,
});
export const plusInfantGuest = infant => ({
  type: BookingActionType.PLUS_INFANT_GUEST,
  payload: infant,
});
export const minusInfantGuest = infant => ({
  type: BookingActionType.MINUS_INFANT_GUEST,
  payload: infant,
});
export const totalGuest = guest => ({
  type: BookingActionType.TOTAL_GUEST,
  payload: guest,
});
