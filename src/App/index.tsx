import React from 'react';

import '@github/g-emoji-element';
import {Routes, Route} from 'react-router-dom';
import Layout from '../Layout';
import Trending from '../pages/Trending';
import {Developers} from '../pages/Developer';

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Layout />} />
				<Route path='/trending' element={<Trending />} />
				<Route path='/developers' element={<Developers />} />
				<Route path='*' element={<h1>Nothing to show</h1>} />
			</Routes>
		</>
	);
}

export default App;
