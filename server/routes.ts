import * as express from 'express';
import * as apiV1Router from './api';
import * as path from 'path';

const router = express.Router();

router.use('/api/v1', apiV1Router);

console.log(__dirname);

//router.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
// Always return the main index.html, so react-router render the route in the client
//router.get('*', function (req, res) {
//    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
//});

export = router;