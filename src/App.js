import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import McVsScreen from './components/McVsScreen';
import { startLoading } from './redux/store';
import McChooseHero from './components/McChooseHero';
import Footer from './components/Footer';

class App extends React.Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  handleArrow = (event, img) => {
    this.props.choosePersone(event.keyCode, img);
    const { handleClose } =  this.props;
     if (event.keyCode === 13) {
        setTimeout(handleClose, 10000);
     }
  }

  render() {
    const { icons, isOpen } = this.props;

    return (
      <>
        <div className="App">
          <h2>Select your figghter</h2>
          <header onKeyDown={event => this.handleArrow(event)} className="App-header">
            {icons ? icons.map(icon => (
            <McChooseHero handleArrow={this.handleArrow} key={icon.id} icon={icon} />
          )) : ''}
          </header>
        <div className="for_decoration"></div>
        {
          isOpen 
          ? <McVsScreen />
          : ''
        }
      </div>
      <Footer />
    </>
    );
  }
}

const mapStateToProps = state => ({
  icons: state.icons_heros,
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => dispatch(startLoading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
