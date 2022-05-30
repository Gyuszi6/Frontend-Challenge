export const SET_WEIGHT = "SET_WEIGHT";
export const SET_PACKETPOINT = "SET_PACKETPOINT";

export const setWeight = (weight) => {
  return {
    type: SET_WEIGHT,
    payload: weight,
  };
};

export const setPacketPoint = (packetPoint) => {
  return {
    type: SET_PACKETPOINT,
    payload: packetPoint,
  };
};
