import { RootState } from '../../index';

// Selectors
export const getIsRequesting = (state: RootState) => state.message.requesting;
export const getLastApiMessage = (state: RootState) => state.message.lastApiMessage;
export const getError = (state: RootState) => state.message.error;
