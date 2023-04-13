import { combineReducers } from "redux";

const initState = {
  isError: false,
  errorMessage: "",
  dataRecruit: [],
  isLoading: false
};

const RecruitReducer = (state = initState, action) => {
    console.log('action :>> ', action.payload);
  switch (action.type) {
    case "GET_ALL_RECRUIT":
        console.log('11111');
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ALL_RECRUIT_SUCCESS":
        console.log('22222');
      return {
        ...state,
        isLoading: false,
        dataRecruit: action.payload.data,
      };
    case "GET_ALL_RECRUIT_FAILURE":
        console.log('33333');
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
RecruitReducer: RecruitReducer
});

export default rootReducer;