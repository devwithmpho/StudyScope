import express from 'express';
import cors from 'cors';

import sessionsRouter from './routes/sessions.route.js';

import connectToDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use('/api/sessions', sessionsRouter);

app.get('/', (_, res) => {
	res.send('API is working!');
});

connectToDB()
	.then(() => {
		console.log('Successfully connected to DB');

		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(`There was an error connecting to the server: ${error}`);
	});
