import * as express from 'express';
import * as MessagingEndpointV1 from './messaging'

import EmailContext from '../contexts/EmailContext';

const router = express.Router();

// Contexts Registration
const emailContext : IEmailContext = new EmailContext();

router.use('/messaging', MessagingEndpointV1({ emailContext }));

export = router;