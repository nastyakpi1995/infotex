import React from 'react';
import { connect } from 'react-redux';
import './McVsScreen.css';
import BoxIcon from './BoxIcon';
import Animation from './Animation';

const McVsScreen = ({ imgFull, isAnimat }) => {
    return (
   <div className="mc__VsScreen_box">
      {
        isAnimat && <Animation /> 
      }
   <div className="mc__VsScreen_wall">
    <img className="mc__VsScreen__img-right" alt="" src="img/metal.jpg" />
     </div>
     <img className="mortal-Combat_logo-right" alt="" src="img/mortal_snack.svg" />
     <div className="mortal-Combat_container"> 
       <div className="mortal-Combat_picture">
         <img 
          className="mortal-Combat"
          alt=""
          src={imgFull ? imgFull : "img/hero--2.svg"}
        />
      </div>
      <div className="mortal-Combat_main">
        <h2>Battle 1</h2>
        <img className="mortal-Combat_logo-vs" alt="" src="img/vs.svg" />
        <BoxIcon />
      </div>
      <div className="mortal-Combat_picture">
        <img
          alt=""
          className="mortal-Combat"
          src={"img/hero--2.svg"} 
        />
      </div>
    </div>
    <img 
      className="mortal-Combat_logo-left" 
      src="img/mortal_snack.svg"
      alt="" 
    />
    <div className="mc__VsScreen_wall">
      <img alt="" className="mc__VsScreen__img-left" src="img/metal.jpg" />
    </div>
  </div> 
  )
}

const mapStateToProps = state => ({
  imgFull: state.src,
  isAnimat: state.isAnimat,
});

export default connect(
 mapStateToProps,
)(McVsScreen);
