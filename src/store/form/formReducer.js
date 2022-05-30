import { SET_PACKETPOINT, SET_WEIGHT } from "./formActions";

export const initialState = {
  weight: 0,
  packetPoint: "",
};

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WEIGHT: {
      return { ...state, weight: payload };
    }
    case SET_PACKETPOINT: {
      return { ...state, packetPoint: payload };
    }
  }
};

export default formReducer;
