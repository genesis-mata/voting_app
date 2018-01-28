import C from '../constants';

export const voteReact = () => {
  return ({
    type: C.VOTE_REACT
  });
};

export const voteAngular = () => {
  return ({
    type: C.VOTE_ANGULAR
  });
};

export const voteVuejs = () => {
  return ({
    type: C.VOTE_VUE
  });
};
