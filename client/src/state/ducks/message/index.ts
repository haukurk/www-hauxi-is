import { message } from './reducers';

import * as messageActions from './actions';
import * as messageSelectors from './actions';
import * as messageTypes from './types';
import * as messageConstants from './constants';

export {
    messageActions,
    messageSelectors,
    messageTypes,
    messageConstants
};

export default message;