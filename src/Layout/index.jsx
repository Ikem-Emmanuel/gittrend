import Wrapper from '../Theme/Styles/Wrapper.styled';
import {Container} from '../Theme/Styles/Container.styled';
import Navbar from '../Components/Navigation/Index';
import BreadCrumb from '../Components/Features/BreadCrumb';

import Trending from '../pages/Trending';
import {Developers} from '../pages/Developer';
import {Route, Routes} from 'react-router-dom';
const Layout = () => {
	return (
		<>
			<Wrapper />
			<Container>
				<Navbar />
				<BreadCrumb />
				<Routes>
					<Route path='/' element={<Trending />} />
					<Route path='/developers' element={<Developers />} />
				</Routes>
			</Container>
		</>
	);
};

export default Layout;
