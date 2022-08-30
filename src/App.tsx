import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { SkeletonTheme } from 'react-loading-skeleton';

import './App.scss';

function App() {
	return (
		<SkeletonTheme baseColor='#565656' highlightColor='#838383'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</SkeletonTheme>
	);
}

export default App;
