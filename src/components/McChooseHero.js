
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import * as actions from '../redux/store';
import './McChooseHero.css';

class McChooseHero extends React.Component {
  handleArrow = (event, img) => {
    // this.props.handleArrow(event.keyCode, img)
    // this.props.choosePersone(event.keyCode, img);
    // const { handleClose } =  this.props;
    //  if (event.keyCode === 13) {
    //     setTimeout(handleClose, 10000);
    //  }
  }
  componentDidMount() {
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
  const { icon, selectedPersonId, imgFull } = this.props;
console.log(imgFull)
    return (
      <form 
        onSubmit={this.handleSubmit} 
        className="form"
      >
      <div
        className={classNames({
        'PeopleTable__row--selected': selectedPersonId === icon.id,
        'person': true,
      })}
        tabIndex="3"
        onKeyDown={event => this.props.handleArrow(event, icon.src )}
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
