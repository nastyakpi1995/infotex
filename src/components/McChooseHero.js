import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '../redux/store';
import './McChooseHero.css';

class McChooseHero extends React.Component {
  handleArrow = (event, img) => {
    const { choosePersone, startAnim, handleClose } = this.props;
    choosePersone(event.keyCode, img);
     if (event.keyCode === 13) {
      setTimeout(startAnim, 3000);
        setTimeout(handleClose, 10000);
     }
  }
  componentDidMount() {
    window.onkeydown = (event) => this.handleArrow(event)
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
  const { icon, selectedPersonId, imgFull } = this.props;
    return (
      <form 
        onSubmit={this.handleSubmit} 
        className="form"
      >
      <button
        className={classNames({
        'PeopleTable__row--selected': selectedPersonId === icon.id,
        'person': true,
      })}
        onKeyDown={event => this.handleArrow(event, icon.type )}
      >
      <img className="person__img_icon" alt="" src={icon.src} />
      </button>
      <div  
        className={classNames({
        'person__img': icon.id === 13,
        'person__img__hidden': icon.id !== 13,
      })} 
      >
      <img
        alt=""
        src={imgFull ? imgFull : 'img/hero--1.svg'} />
      </div>
    </form>
   )
};
}

const mapStateToProps = state => ({
  selectedPersonId: state.selectedPersonId,
  imgFull: state.src,
});

const mapDispatchToProps = dispatch => ({
  choosePersone: (event, img) => dispatch(actions.choosePersone(event, img)),
  handleClose: () => dispatch(actions.handleClose()),
  startAnim: () => dispatch(actions.startAnim()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(McChooseHero);
