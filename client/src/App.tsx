import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
				</Route>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default App;
