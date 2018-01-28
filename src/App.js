import React, {Component} from 'react';
import {voteReact, voteAngular, voteVuejs} from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  render() {
    return (<div className="container">
      <div className="jumbotron" style={{
          'textAlign' : 'center'
        }}>
        <h2>Cuál es tu framework de front-end favorito para el 2018?</h2>
        <h4>Da clic al logo para votar!</h4>
        <br/>
        <div className="row">
          <div className="col-md-offset-3 col-md-4">
            <img src="img/react_logo.svg" height="96" alt="React" onClick={this.handleVoteReact}></img>
          </div>
          <div className="col-md-4">
            <img src="img/angular_logo.svg" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
          </div>
          <div className="col-md-4">
            <img src="img/vuejs_logo.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}></img>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;
