import { combineReducers } from 'redux';
import * as messageDucks from './ducks/message';

export interface RootState {
    message: messageDucks.messageTypes.MessageState;
}

export const reducers = combineReducers<RootState>({
    message: messageDucks.default,
});