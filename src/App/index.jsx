import React from 'react';

import '@github/g-emoji-element';
import {Routes, Route} from 'react-router-dom';
import Layout from '../Layout';
// import Trending from '../pages/Trending';
import {Developers} from '../pages/Developer';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='trending' element={<Layout />} />
					<Route path='/developers' element={<Developers />} />
					<Route path='*' element={<h1>No Data Found</h1>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
