import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import McVsScreen from './components/McVsScreen';
import { startLoading } from './redux/store';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  componentDidMount() {
    this.props.loadTodos()
  }

  render() {
    const { isOpen } = this.props;

    return (
      <>
        <div className="App">
          <h2>Select your figghter</h2>
         <Header />
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

