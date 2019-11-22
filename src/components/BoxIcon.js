import React from 'react';
import { connect } from 'react-redux';
import './McVsScreen.css';
import * as actions from '../redux/store';

class BoxIcon extends React.Component {
  handleKey = (event) => {
    if (event.keyCode === 81) {
      const { chooseIconQ } =  this.props;
      chooseIconQ();
    }
    if (event.keyCode === 87) {
      const { chooseIconW } =  this.props;
      chooseIconW();
    }
    if (event.keyCode === 69) {
      const { chooseIconE } =  this.props;
      chooseIconE();
    }
    if (event.keyCode === 82) {
      const { chooseIconR } =  this.props;
      chooseIconR();
    }
    if (event.keyCode === 84) {
      const { chooseIconT } =  this.props;
      chooseIconT();
    }
    if (event.keyCode === 89) {
      const { chooseIconY } =  this.props;
      chooseIconY();
    }
  }
  componentWillMount() {
    this.props.handleclear()
  }
  componentDidMount() {
    window.onkeydown = (event) => this.handleKey(event)
  }
  getRef = (node) => { this.el = node };

  render() {
    const { Iconq, Iconw, Icone, Iconr, Icont, Icony } = this.props;

    return (
          <div className="">
            <button  
              onKeyDown={event => this.handleKey(event)}
            >
              <Iconq />
            </button>
            <button
              onKeyDown={event => this.handleKey(event)}
            >
            
              <Iconw />
            </button>
            <button
              onKeyDown={event => this.handleKey(event)}
            >
              <Icone />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event)}
            >
              <Iconr />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event)}
            >
              <Icont />
            </button>
            <button  
              onKeyDown={event => this.handleKey(event)}
            >
              <Icony />
            </button>
          </div>
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
  handleclear: () => dispatch(actions.handleclear()),
});

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(BoxIcon);
