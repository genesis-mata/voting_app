import C from '../constants';

export default (state = C.initialState, action = '') => {
  switch(action.type) {
    case C.VOTE_REACT:
      console.log('React Voted: ', state.react+1);
      return Object.assign({}, state,{
        react: state.react + 1
      });
    case C.VOTE_ANGULAR:
      console.log('angular Voted: ', state.angular+1);
      return Object.assign({}, state,{
        angular: state.angular + 1
      });
    case C.VOTE_VUE:
      console.log('Vuejs Voted: ', state.vuejs+1);
      return Object.assign({}, state,{
        vuejs: state.vuejs + 1
      });
    default:
      return state;
  }
};
