import {StyledBreadCrumbs} from '../../styles/BreadCrumb.styled';

function BreadCrumb() {
	return (
		<StyledBreadCrumbs>
			<div className='bread-container'>
				<h1 className='bread-container-header'>Tending</h1>
				<p className='bread-container-subHeader'>
					See what the GitHub community is most excited about today.
				</p>
			</div>
		</StyledBreadCrumbs>
	);
}

export default BreadCrumb;
