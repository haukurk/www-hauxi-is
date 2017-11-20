import { put } from 'redux-saga/effects';
import { messageActions } from '../ducks/message';

export function* sendMessage (action: messageActions.SendRequest) {
  const { email, message, name, phone } = action;

  yield fetch('/api/v1/messaging/send', {
    method: 'POST',
    body: JSON.stringify({
        email, message, name, phone
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then(response => put(messageActions.sendSucceeded(response)))
  .catch(error => put(messageActions.sendFailed(error, 'Error sending message through the API.')));
}
