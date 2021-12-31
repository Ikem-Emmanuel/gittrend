import Wrapper from '../Theme/Styles/Wrapper.styled';
import {Container} from '../Theme/Styles/Container.styled';
import Navbar from '../Components/Navigation/Index';
import BreadCrumb from '../Components/Features/BreadCrumb';
import {Body} from '../Components/Body';
import Trending from '../pages/Trending';
const Layout = () => {
	return (
		<>
			<Wrapper />
			<Container>
				<Navbar />
				<BreadCrumb />
				<Body />
			</Container>
		</>
	);
};

export default Layout;
