import React, {Component} from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesReactInPercent = () => {
    if (this.store.getState().react) {
      return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
    }
    return 0;
  }

  votesAngularInPercent = () => {
    if (this.store.getState().angular) {
      return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
    }
    return 0;
  }

  votesVuejsInPercent = () => {
    if (this.store.getState().vuejs) {
      return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
    }
    return 0;
  }

  winnerVotesToPercent = (state) => {
    if (state.react >= state.angular && state.react >= state.vuejs) {
      return state.react;
    } else if (state.angular >= state.vuejs && state.angular >= state.react) {
      return state.angular;
    } else if (state.vuejs >= state.angular && state.angular >= state.react) {
      return state.vuejs;
    }
  }

  votesReactInPercentStyle = (state) => {
    return ({
      width: (state.react / this.winnerVotesToPercent(state)) * 100 + '%'
    });
  }

  votesAngularInPercentStyle = (state) => {
    return ({
      width: (state.angular / this.winnerVotesToPercent(state)) * 100 + '%'
    });
  }

  votesVuejsInPercentStyle = (state) => {
    return ({
      width: (state.vuejs / this.winnerVotesToPercent(state)) * 100 + '%'
    });
  }

  render() {
    return (<div className="container">
      <div className="jumbotron">
        <span className="badge badge-info">React: {this.votesReactInPercent().toFixed(2) + '%'}
          &nbsp; con {this.store.getState().react}
          &nbsp; votos</span>
        <div className="progress progress-striped active">
          <div className="progress-bar bg-info" style={this.votesReactInPercentStyle(this.store.getState())}></div>
        </div>
        <span className="badge badge-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}
          &nbsp; con {this.store.getState().angular}
          &nbsp; votos</span>
        <div className="progress progress-striped active">
          <div className="progress-bar bg-danger" style={this.votesAngularInPercentStyle(this.store.getState())}></div>
        </div>
        <span className="badge badge-success">Vuejs: {this.votesVuejsInPercent().toFixed(2) + '%'}
          &nbsp; con {this.store.getState().vuejs}
          &nbsp; votos</span>
        <div className="progress progress-striped active">
          <div className="progress-bar bg-success" style={this.votesVuejsInPercentStyle(this.store.getState())}></div>
        </div>
      </div>
    </div>);
  }
}

export default Results;
