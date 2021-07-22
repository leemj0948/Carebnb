import { HeaderType } from './header.types';
export const mainpage = () => ({
  type: HeaderType.MAIN_PAGE_HEADER,
});

export const headerSize = locationY => ({
  type: HeaderType.BIG_SIZE_HEADER,
  payload: locationY,
});
export const toggleUserDropDown = () => ({
  type: HeaderType.USER_INFO_DROP_DOWN,
});
export const toggleClickExit = () => ({
  type: HeaderType.USER_INFO_DROP_DOWN,
});
export const modalHandler = () => ({
  type: HeaderType.MODAL_HANDLE,
});
