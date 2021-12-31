import {useState} from 'react';
import {StyledCardBody} from '../../../styles/Card.styled';
import {Link} from 'react-router-dom';
import '@github/g-emoji-element';
import Header from '../Title';
import {TrendingSection} from '../../../Body/TrendingSection';
import {DeveloperSection} from '../../../Body/DeveloperSection';

// const emoji = document.createElement('g-emoji');
const CardBody = () => {
	// const [IsStared, setIsStared] = useState(false);
	return (
		<>
			<Header />
			<StyledCardBody>
				{/* <TrendingSection />
				<DeveloperSection /> */}
			</StyledCardBody>
		</>
	);
};

export default CardBody;
