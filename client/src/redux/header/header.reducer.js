import { HeaderType } from './header.types';
import { sizeOfBar } from './header.utils';

const INITAL_STATE = {
  mainPageHeader: true,
  bigHeader: true,
  UserInfoHidden: true,
};

const headerReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case HeaderType.MAIN_PAGE_HEADER:
      return {
        ...state,
        mainPageHeader: !state.mainPageHeader,
      };
    case HeaderType.BIG_SIZE_HEADER:
      return {
        ...state,
        bigHeader: sizeOfBar(state.bigHeader, action.payload),
      };
    case HeaderType.USER_INFO_DROP_DOWN:
      return {
        ...state,
        UserInfoHidden: !state.UserInfoHidden,
      };
    default:
      return state;
  }
};
export default headerReducer;
