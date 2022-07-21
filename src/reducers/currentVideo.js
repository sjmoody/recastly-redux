import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log('a', action);
  console.log('state', state);

  if (!state) {
    state = {
      videoList: [],
      currentVideo: null
    };
  }

  if (action.type === 'CHANGE_VIDEO') {
    const newState = [...state, action.video];
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;
