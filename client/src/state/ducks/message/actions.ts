import * as constants from './constants';

export type MessageAction = SendFailed | SendSucess | SendRequest;

export interface SendFailed {
  type: constants.ERROR_SEND_MESSAGE;
  error: string;
  response: Response;
}

export interface SendSucess {
  type: constants.SUCCESS_SEND_MESSAGE;
  response: Response;
}

export interface SendRequest {
    type: constants.REQUEST_SEND_MESSAGE;
    name: string;
    email: string;
    phone: string;
    message: string;
}
  
export interface SendMessageFunc {
    (name: string, phone: string, email: string, message: string): SendRequest
}

// Actions
export const sendFailed = (response: Response, errorMessage: string): SendFailed => (
    { type: constants.ERROR_SEND_MESSAGE, error: errorMessage, response }
);
export const sendSucceeded = (response: Response): SendSucess => (
    { type: constants.SUCCESS_SEND_MESSAGE, response });


export let sendMessage : SendMessageFunc;
sendMessage = (name: string, phone: string, emaill: string, message: string): SendRequest => (
    { type: constants.REQUEST_SEND_MESSAGE, name: name, email: emaill, phone, message }
  );
