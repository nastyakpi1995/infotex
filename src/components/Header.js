import React from 'react';
import { connect } from 'react-redux';
import McChooseHero from './McChooseHero';

const Header = ({ icons }) => {
  return (
    <header 
      className="App-header"
    >
      {icons ? icons.map(icon => (
        <McChooseHero key={icon.id} icon={icon} />
      )) : ''}
      </header> 
    );
}

const mapStateToProps = state => ({
  icons: state.icons_heros,
});


export default connect(
  mapStateToProps,
)(Header);