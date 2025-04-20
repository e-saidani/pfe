import {Router} from 'express';
import { createUsername, createPassword } from '../Controllers/credentialsController.js';

const router = Router();

router.post('/username', createUsername);

router.post('/password', createPassword);

export default router;