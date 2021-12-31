import React from 'react';
import Wrapper from '../Theme/Styles/Wrapper.styled';
import {Container} from '../Theme/Styles/Container.styled';
import Navbar from '../Components/Navigation/Index';
import BreadCrumb from '../Components/Features/BreadCrumb';
import {Body} from '../Components/Body';

function App() {
	return (
		<>
			<Wrapper />
			<Container>
				<Navbar></Navbar>
				<BreadCrumb />
				<Body />
			</Container>
		</>
	);
}

export default App;
