import { GET_ALL, MSJ_TYP, MODAL,THEME } from "./constants";


export const initialState : {} = {
  showAll:  null ,
  msjTyp :  null ,
  showModal:{
    state: false,
    data: null
  },
  theme: "light"
};

export default function appReducer(state = initialState, action: any) {
  if (action.type === GET_ALL) {
    return {
      ...state,
      showAll: action.payload,
    };
  }
  if (action.type === MSJ_TYP) {
    return {
      ...state,
      msjTyp: action.payload,
    };
  }
  if (action.type === MODAL) {
    return {
      ...state,
      showModal: { state:action. payload , data: action.data }
    };
  }
  if (action.type === THEME) {
    return {
      ...state,
      theme: action.payload,
    };
  }
  return state;
}
