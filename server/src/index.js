import express from 'express';
import cors from 'cors';

import sessionsRouter from './routes/sessions.route';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionsRouter);

app.get('/', (_, res) => {
	res.send('API is working!');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
