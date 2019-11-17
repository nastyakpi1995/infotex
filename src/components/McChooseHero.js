
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '../redux/store';
import './McChooseHero.css';

const McChooseHero = ({ icon, selectedPersonId, imgFull }) => {
  const handleArrow = (event, img) => {
    this.props.choosePersone(event.keyCode, img);
    const { handleClose } =  this.props;
     if (event.keyCode === 13) {
        setTimeout(handleClose, 10000);
     }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
    return (
      <form 
        onSubmit={handleSubmit} 
        className="form"
      >
      <div
        className={classNames({
        'PeopleTable__row--selected': selectedPersonId === icon.id,
        'person': true,
      })}
        tabIndex="3"
        onKeyDown={event => handleArrow(event, icon.src )}
      >
      <img className="person__img_icon" alt="" src={icon.src} />
      </div>
      <div  

        className={classNames({
        'person__img': icon.id === 13,
        'person__img__hidden': icon.id !== 13,
      })} 
      >
      <img
        alt=""
        src={imgFull ? imgFull : ""} />
      </div>
    </form>
   )
};

const mapStateToProps = state => ({
  selectedPersonId: state.selectedPersonId,
  imgFull: state.src,
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch => ({
  choosePersone: (event, img) => dispatch(actions.choosePersone(event, img)),
  handleClose: () => dispatch(actions.handleClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(McChooseHero);

// function App() {
//   const firstNameRef = useRef(null);
//   const lastNameRef = useRef(null);
//   const submitRef = useRef(null);
   
//   useEffect(()=> {
//     false ? lastNameRef.current.focus() : firstNameRef.current.focus();

//   }, [])
//   function firstkeyDown(e) {
//     if (e.key === "Enter") {
//       lastNameRef.current.focus()
//     }
//   }
//   function lastKeyDown(e) {
//     if (e.key === 'Enter') {
//       submitRef.current.focus();
//     }
//   }
//   return (
//     <div className="App">
//       <header>
//         <input 
//           type="text" 
//           ref={firstNameRef} 
//           onKeyDown={firstkeyDown} 
//           placeholder="enter first name" 
//         />
//         <input 
//           type="text" 
//           ref={lastNameRef} 
//           onKeyDown={lastKeyDown} 
//           placeholder="enter last name"
//         />
//         <button ref={submitRef}>submit</button>

//       </header>
//     </div>
//   )
// }