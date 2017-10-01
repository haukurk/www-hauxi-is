import * as constants from './constants';

export type MessageAction = SendFailed | SendSucess | SendRequest;

export interface SendFailed {
  type: constants.ERROR_SEND_MESSAGE;
  error: string;
  response: string;
}

export interface SendSucess {
  type: constants.SUCCESS_SEND_MESSAGE;
  response: string;
}

export interface SendRequest {
    type: constants.REQUEST_SEND_MESSAGE;
    name: string;
    email: string;
    phone: string;
    message: string;
}
  
// Actions
export const sendFailed = (response: string): SendFailed => (
    { type: constants.ERROR_SEND_MESSAGE, error: response, response }
);
export const sendSucceeded = (response: string): SendSucess => (
    { type: constants.SUCCESS_SEND_MESSAGE, response });
export const sendMessage = (name: string, phone: string, email: string, message: string): SendRequest => (
    { type: constants.REQUEST_SEND_MESSAGE, name, email, phone, message }
  );