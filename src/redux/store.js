import { createStore } from 'redux';
import icons from './manifest';
import BookIcon from '@material-ui/icons/Book';
import CategoryIcon from '@material-ui/icons/Category';
import CasinoIcon from '@material-ui/icons/Casino';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const START_LOADING = 'START_LOADING';
const CHOOSE_PERSONE = 'CHOOSE_PERSONE';
const CLOSE_WINDOW = 'CLOSE_WINDOW';
const CHOOSE_ICON = 'CHOOSE_ICON';
const CHOOSE_ICONW = 'CHOOSE_ICONW';
const CHOOSE_ICONE = 'CHOOSE_ICONE';
const CHOOSE_ICONR = 'CHOOSE_ICONR';
const CHOOSE_ICONT = 'CHOOSE_ICONT';
const CHOOSE_ICONY = 'CHOOSE_ICONY';
const ANIMATION = 'ANIMATION';
const CLEAR = 'CLEAR';

const initialState = {
  icons_heros: null,
  selectedPersonId: 0,
  selectedPerson: [],
  src: "",
  isOpen: false,
  isAnimat: false,
  indexQ: 0,
  chooseIconQ: CategoryIcon,
  icons: [CategoryIcon, BookIcon, ChromeReaderModeIcon, CasinoIcon, AirplanemodeActiveIcon],
  indexW: 0,
  chooseIconW: CategoryIcon,
  indexE: 0,
  chooseIconE: CategoryIcon,
  indexR: 0,
  chooseIconR: CategoryIcon,
  indexT: 0,
  chooseIconT: CategoryIcon,
  indexY: 0,
  chooseIconY: CategoryIcon,
};

export const startLoading = () => ({ type: START_LOADING });
export const choosePersone = (event, img) => ({ type: CHOOSE_PERSONE, event, img });
export const handleClose = () => ({ type: CLOSE_WINDOW })
export const chooseIconQ = () => ({ type: CHOOSE_ICON });
export const chooseIconW = () => ({ type: CHOOSE_ICONW });
export const chooseIconE = () => ({ type: CHOOSE_ICONE });
export const chooseIconR = () => ({ type: CHOOSE_ICONR });
export const chooseIconT = () => ({ type: CHOOSE_ICONT });
export const chooseIconY = () => ({ type: CHOOSE_ICONY });
export const startAnim = () => ({ type: ANIMATION });
export const handleclear = () => ({ type: CLEAR });


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_ICON:
      return {
        ...state,
        chooseIconQ: state.icons[state.indexQ],
        indexQ: state.indexQ < 4 ? state.indexQ + 1 : 0,
      }
      case CLEAR:
        return {
          ...state,
          indexQ: 0,
          chooseIconQ: CategoryIcon,
          indexW: 0,
          chooseIconW: CategoryIcon,
          indexE: 0,
          chooseIconE: CategoryIcon,
          indexR: 0,
          chooseIconR: CategoryIcon,
          indexT: 0,
          chooseIconT: CategoryIcon,
          indexY: 0,
          chooseIconY: CategoryIcon,
        }
      
    case CHOOSE_ICONW:
      return {
        ...state,
        chooseIconW: state.icons[state.indexW + 1],
        indexW: state.indexW < 3 ? state.indexW + 1 : -1,
      }  
      case CHOOSE_ICONE:
        return {
          ...state,
          chooseIconE: state.icons[state.indexE + 1],
          indexE: state.indexE < 3 ? state.indexE + 1 : -1,
        }
      case CHOOSE_ICONR:
        return {
          ...state,
          chooseIconR: state.icons[state.indexR + 1],
          indexR: state.indexR < 3 ? state.indexR + 1 : -1,
        }  
      case CHOOSE_ICONT:
        return {
          ...state,
          chooseIconT: state.icons[state.indexT + 1],
          indexT: state.indexT < 3 ? state.indexT + 1 : -1,
        }
      case CHOOSE_ICONY:
        return {
          ...state,
          chooseIconY: state.icons[state.indexY + 1],
          indexY: state.indexY < 3 ? state.indexY + 1 : -1,
        }   
    case START_LOADING:
      return {
        ...state,
        icons_heros: icons,
      }
    case CLOSE_WINDOW:
      return {
        ...state,
        isOpen: false,

      }  
      case ANIMATION:
        return {
          ...state,
          isAnimat: false,
        }    
    case CHOOSE_PERSONE:
        if (action.event === 13) {
            return {
              ...state,
              isOpen: true,
              isAnimat: true, 
            }
        }
       if (action.event === 37) {
        if (state.selectedPersonId === 14) {
          return {
            ...state,
            selectedPersonId: 12,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 20) {
          return {
            ...state,
            selectedPersonId: 18,
            src: action.img,
          }
        }
        return {
          ...state,
          selectedPersonId: state.selectedPersonId > 0 ? state.selectedPersonId - 1 : 24,
          src: action.img,
        }
      }
      if (action.event === 38) {
        if (state.selectedPersonId === 0) {
          return {
            ...state,
            selectedPersonId: 7,
            src: action.img,
          }
        }
       
        if (state.selectedPersonId === 1) {
          return {
            ...state,
            selectedPersonId: 20,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 2) {
          return {
            ...state,
            selectedPersonId: 21,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 3) {
          return {
            ...state,
            selectedPersonId: 22,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 4) {
          return {
            ...state,
            selectedPersonId: 23,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 5) {
          return {
            ...state,
            selectedPersonId: 24,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 6) {
          return {
            ...state,
            selectedPersonId: 12,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 16) {
          return {
            ...state,
            selectedPersonId: 3,
            src: action.img,
          }
        }
      
       
        if (state.selectedPersonId <= 9 || state.selectedPersonId === 18 || state.selectedPersonId === 17) {
          return {
            ...state,
            selectedPersonId: state.selectedPersonId - 7,
            src: action.img,
          }
        }
        
        return {
          ...state,
          selectedPersonId: state.selectedPersonId - 6,
          src: action.img,
        }
      }
      if (action.event === 40) {
        if (state.selectedPersonId === 3) {
          return {
            ...state,
            selectedPersonId: 16,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 7) {
          return {
            ...state,
            selectedPersonId: 0,
            src: action.img,
          }
        }
       
        if (state.selectedPersonId === 20) {
          return {
            ...state,
            selectedPersonId: 1,
            src: action.img,
          }
        }
      
        if (state.selectedPersonId === 21) {
          return {
            ...state,
            selectedPersonId: 2,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 22) {
          return {
            ...state,
            selectedPersonId: 3,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 23) {
          return {
            ...state,
            selectedPersonId: 4,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 24) {
          return {
            ...state,
            selectedPersonId: 5,
            src: action.img,
          }
        }
       
        if (state.selectedPersonId >= 4 && state.selectedPersonId !== 10 && state.selectedPersonId !== 11) {
          return {
            ...state,
            selectedPersonId: state.selectedPersonId + 6,
            src: action.img,
          }
        }
        return {
          ...state,
          selectedPersonId: state.selectedPersonId + 7,
          src: action.img,
        }
      }
      if (action.event === 39) {
        if (state.selectedPersonId === 12) {
          return {
            ...state,
            selectedPersonId: 14,
            src: action.img,
          }
        }
        if (state.selectedPersonId === 18) {
          return {
            ...state,
            selectedPersonId: 20,
            src: action.img,
          }
        }
        return {
          ...state,
          selectedPersonId: state.selectedPersonId < 24 ? state.selectedPersonId + 1 : 0 ,
          src: action.img,
        }
      } 

      default:
        return state;
  }
};

const store = createStore(
 reducer,
);

export default store;