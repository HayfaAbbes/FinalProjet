import { TEAMADD, TEAMDELETE} from "./actionTypes";

export const teamAdd = (payload) => {
    return {
      type: TEAMADD,
      payload,
    };
  };
  export const teamDelete = (payload) => {
    return {
      type: TEAMDELETE,
      payload,
    };
  };
  