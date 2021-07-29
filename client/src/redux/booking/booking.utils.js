export const minusAndRemoveGuests = (adult, payload) => {
  if (payload <= 0) {
    return (adult = 0);
  } else {
    return (adult = adult - 1);
  }
};
export const calculateTotal = (stayDate, eachHotelValues) => {
  let fee = { eachHotelValues };
  if (stayDate === Number && fee === Number) {
    return stayDate * fee;
  } else {
    return 0;
  }
  // if (stayDate !== 0 && fee !== 0) {
  //   return stayDate * fee;
  // } else if (fee == 0) {
  //   return -2;
  // } else {
  //   return -1;
  // }
};
