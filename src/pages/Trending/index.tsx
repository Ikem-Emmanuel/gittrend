import {TrendingSection} from '../../Components/Body/TrendingSection';
import Header from '../../Components/Features/Cards/Title';
import {StyledCardBody} from '../../Components/styles/Card.styled';

const Trending = () => {
	return (
		<>
			<Header />
			<StyledCardBody>
				<TrendingSection />
			</StyledCardBody>
		</>
	);
};

export default Trending;
