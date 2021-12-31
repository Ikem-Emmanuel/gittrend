import React from 'react';
import Logo from '../../Features/Logo';
import {Link} from 'react-router-dom';
import {StyledHeader, StyledLink, StyledSubHeader, StyledSubLink} from '../../styles/Navbar.styled';
import Searchitem from './SearchField';

// import {Imenu} from '../../../interfaces';

interface LinkitemProps {
	routeData: {
		menu: {name: string; link: string; icon: string}[];
		authMenu: {name: string; link: string}[];
		subMenu: {name: string; link: string; icon: string}[];
	};
}
const Linkitem = (props: LinkitemProps) => {
	const {menu, authMenu, subMenu} = props.routeData;
	const mainLink = menu.map((item: any, indx: number) => (
		<Link key={indx} to={item.link}>
			{item.name}
		</Link>
	));
	const authLinks = authMenu.map((item: any, indx: number) => (
		<Link key={indx} to={item.link}>
			{item.name}
		</Link>
	));
	const subLinks = subMenu.map((item: any, indx: number) => (
		<Link key={indx} to={item.link}>
			{item.name}
		</Link>
	));
	return (
		<>
			<StyledHeader>
				<StyledLink>
					<Logo />
					{mainLink}
					<Searchitem />
					{authLinks}
				</StyledLink>
			</StyledHeader>
			<StyledSubHeader>
				<StyledSubLink>
					<div className='sub-links'>{subLinks}</div>
					<div className='sub-links-btn'>
						<button className='btn'>Get Email Updates</button>
					</div>
				</StyledSubLink>
			</StyledSubHeader>
		</>
	);
};

export default Linkitem;
