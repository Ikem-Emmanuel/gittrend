import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Filters} from './FIlters';

const Header = ({data}) => {
	// let pageName = props.page
	const [pageName, setpageName] = useState(data);

	useEffect(() => {
		setpageName(data.linkName);
	}, [data.linkName]);
	return (
		<div className='card-header'>
			<div>
				<div className='btn-group'>
					<Link
						to='/'
						className={pageName === 'repository' ? 'btn btn-active' : 'btn'}
						type='button'>
						Repositories
					</Link>
					<Link
						to='/developers'
						className={pageName === 'developer' ? 'btn btn-active' : 'btn'}
						type='button'>
						Developers
					</Link>
				</div>
			</div>
			<div>
				<Filters />
			</div>
		</div>
	);
};

export default Header;
