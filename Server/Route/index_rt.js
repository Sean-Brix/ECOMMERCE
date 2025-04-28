import express from 'express'

// Route: ('/')
const router = express.Router();

import authentication from './Authentication/auth_rt.js'
router.use('/auth', authentication);

import api from './API/api_rt.js'
router.use('/api', api);

export default router;