import { takeEvery } from 'redux-saga/effects';
import { messageConstants } from '../ducks/message';
import * as messageSaga from './message';

export default function* rootSaga () {
  yield [
    takeEvery(messageConstants.REQUEST_SEND_MESSAGE, messageSaga.sendMessage),
  ];
}
