import { combineReducers } from 'redux';
import bookingReducer from './booking/booking.reducer';
import headerReducer from './header/header.reducer';

const rootReducer = combineReducers({
  booking: bookingReducer,
  header: headerReducer,
});

export default rootReducer;
