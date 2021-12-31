import React, {FC} from 'react';
import Linkitem from './Menuitems/Linkitem';

const dropdownIcon =
	'<svg x="0" y="0" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative"><path d="M1,1l6.2,6L13,1"></path></svg>';

const data = {
	menu: [
		{name: 'Why Github?', link: '#', icon: dropdownIcon},
		{name: 'Enterprise', link: '#', icon: ''},
		{name: 'Explore', link: '#', icon: dropdownIcon},
		{name: 'Marketplace', link: '#', icon: ''},
		{name: 'Pricing', link: '#', icon: dropdownIcon},
	],
	authMenu: [
		{name: 'Sign In', link: '#'},
		{name: 'Sign Up', link: '#'},
	],
	subMenu: [
		{name: 'Explore', active: false, link: '#', icon: dropdownIcon},
		{name: 'Topics', active: false, link: '#', icon: dropdownIcon},
		{name: 'Trending', active: true, link: '#', icon: dropdownIcon},
		{name: 'Collections', active: false, link: '#', icon: dropdownIcon},
		{name: 'Events', active: false, link: '#', icon: dropdownIcon},
		{name: 'Github Sponsors', active: false, link: '#', icon: dropdownIcon},
	],
};
const NavBar: FC = () => {
	return <Linkitem routeData={data} />;
};

export default NavBar;
