import React from 'react';
import { connect } from 'react-redux';
import './McVsScreen.css';


import * as actions from '../redux/store';

class McVsScreen extends React.Component {
  handleKey = (event, id) => {
    if (event.keyCode === 81 && id === 1) {
      const { chooseIconQ } =  this.props;
      chooseIconQ();
    }
    if (event.keyCode === 87 && id === 2) {
      const { chooseIconW } =  this.props;
      chooseIconW();
    }
    if (event.keyCode === 69 && id === 3) {
      const { chooseIconE } =  this.props;
      chooseIconE();
    }
    if (event.keyCode === 82 && id === 4) {
      const { chooseIconR } =  this.props;
      chooseIconR();
    }
    if (event.keyCode === 84 && id === 5) {
      const { chooseIconT } =  this.props;
      chooseIconT();
    }
    if (event.keyCode === 89  && id === 6) {
      const { chooseIconY } =  this.props;
      chooseIconY();
    }
  }
  getRef = (node) => { this.el = node };

  render() {
    const { imgFull, Iconq, Iconw, Icone, Iconr, Icont, Icony } = this.props;

    return (
    <>
      <div className="mc__VsScreen_box">
        <div className="mc__VsScreen_wall">
          <img className="mc__VsScreen__img-right" alt="" src="img/metal.jpg" />
        </div>
        <img className="mortal-Combat_logo-right" alt="" src="img/mortal_snack.svg" />
        <div className="mortal-Combat_container"> 
        <div className="mortal-Combat_picture">
          <img 
            className="mortal-Combat"
            alt=""
            src={imgFull ? imgFull : "https://img.utdstc.com/icons/mortal-kombat-x-android.png:s"}
          />
        </div>
        <div className="mortal-Combat_main">
          <h2>Battle 1</h2>
          <img className="mortal-Combat_logo-vs" alt="" src="img/vs.svg" />

          <div>
            <button  
              
              onKeyDown={event => this.handleKey(event, 1)}
            >
              <Iconq />
            </button>
            <button
              autofocus  
              onKeyDown={event => this.handleKey(event, 2)}
            >
            
              <Iconw />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event, 3)}
            >
              <Icone />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event, 4)}
            >
              <Iconr />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event, 5)}
            >
              <Icont />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event, 6)}
            >
              <Icony />
            </button>
          </div>
        </div>
        <div className="mortal-Combat_picture">
          <img
            className="mortal-Combat"
            src={imgFull ? imgFull : "https://img.utdstc.com/icons/mortal-kombat-x-android.png:s"} 
          />
        </div>
          </div>
        <img className="mortal-Combat_logo-left" src="img/mortal_snack.svg" />
        <div className="mc__VsScreen_wall">
          <img className="mc__VsScreen__img-left" src="img/metal.jpg" />
        </div>
      </div>
      </>
    );
  }
}


const mapStateToProps = state => ({
  imgFull: state.src,
  Iconq: state.chooseIconQ,
  Iconw: state.chooseIconW,
  Icone: state.chooseIconE,
  Iconr: state.chooseIconR,
  Icont: state.chooseIconT,
  Icony: state.chooseIconY,
});

const mapDispatchToProps = dispatch => ({
  chooseIconQ: () => dispatch(actions.chooseIconQ()),
  chooseIconW: () => dispatch(actions.chooseIconW()),
  chooseIconE: () => dispatch(actions.chooseIconE()),
  chooseIconR: () => dispatch(actions.chooseIconR()),
  chooseIconT: () => dispatch(actions.chooseIconT()),
  chooseIconY: () => dispatch(actions.chooseIconY()),
});

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(McVsScreen);
