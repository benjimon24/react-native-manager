import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload = {prop: 'name', value: 'jane'}
      return { ...state, [action.payload.prop]: [action.payload.value] };
    // this is not an array - it is called key interpolation
    // the key that we are adding to this object will be determined at runtime

    default:
      return state;
  }
};