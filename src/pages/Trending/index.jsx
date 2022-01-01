import {TrendingSection} from '../../Components/Body/TrendingSection';
import Header from '../../Components/Features/Cards/Header';
import {StyledCard, StyledCardBody} from '../../Components/styles/Card.styled';
import {StyledBodyWrapper} from '../../Theme/Styles/Container.styled';

const Trending = () => {
	// const developerData = {
	// 	filterParams: [
	// 		{ name: 'Language', language:[{name:'Javascript'}], icon: dropdownIcon },
	// 		{ name: 'Enterprise', link: '#', icon: '' },
	// 		{ name: 'Explore', link: '#', icon: dropdownIcon },
	// 		{ name: 'Marketplace', link: '#', icon: '' },
	// 		{ name: 'Pricing', link: '#', icon: dropdownIcon },
	// 	],
	// }

	let pageInfo = {
		linkName: 'repository',
		link: '/',
	};
	return (
		<>
			<StyledBodyWrapper>
				<StyledCard>
					<Header data={pageInfo} />
					<StyledCardBody>
						<TrendingSection />
					</StyledCardBody>
				</StyledCard>
			</StyledBodyWrapper>
		</>
	);
};

export default Trending;
