import {QueryClient, QueryClientProvider} from 'react-query';
import {DeveloperSection} from '../../Components/Body/DeveloperSection';
import Header from '../../Components/Features/Cards/Header';
import {StyledCard, StyledCardBody} from '../../Components/styles/Card.styled';
import {StyledBodyWrapper} from '../../Theme/Styles/Container.styled';

const queryClient = new QueryClient();

export const Developers = () => {
	let pageInfo = {
		linkName: 'developer',
		link: '/developers',
	};
	return (
		<div>
			<>
				<StyledBodyWrapper>
					<StyledCard>
						<Header data={pageInfo} />
						<StyledCardBody>
							<QueryClientProvider client={queryClient}>
								<DeveloperSection />
							</QueryClientProvider>
						</StyledCardBody>
					</StyledCard>
				</StyledBodyWrapper>
			</>
		</div>
	);
};
