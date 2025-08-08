import { Router } from 'express';

import {
	createSession,
	getAllSessions,
	updateSession,
} from '../controllers/sessions.controller.js';

const sessionsRouter = Router();

sessionsRouter.get('/', getAllSessions);

sessionsRouter.post('/', createSession);

sessionsRouter.patch('/:id', updateSession);

export default sessionsRouter;
