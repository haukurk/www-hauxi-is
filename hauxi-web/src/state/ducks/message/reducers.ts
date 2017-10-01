import { MessageAction } from './actions';
import { MessageState } from './types';
import { ERROR_SEND_MESSAGE, REQUEST_SEND_MESSAGE, SUCCESS_SEND_MESSAGE } from './constants';

const initialState: MessageState = {
    requesting: false,
    error: '',
    lastApiMessage: ''
};

export function message(state: MessageState = initialState, action: MessageAction): MessageState {
  switch (action.type) {
    case ERROR_SEND_MESSAGE:
      return { 
          requesting: false,
          error: action.error,
          lastApiMessage: action.response
       };
    case REQUEST_SEND_MESSAGE:
      return { 
          requesting: true,
          error: '',
          lastApiMessage: ''
       };
    case SUCCESS_SEND_MESSAGE:
      return {
          requesting: false,
          error: '',
          lastApiMessage: action.response
      };
    default:
      return state;
  }
}