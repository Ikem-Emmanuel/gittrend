import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Filters} from './FIlters';

const Header = () => {
	const [Section, setSection] = useState('repositories');
	return (
		<div className='card-header'>
			<div>
				<div className='btn-group'>
					<Link
						to='/'
						className={Section === 'repositories' ? 'btn btn-active' : 'btn'}
						type='button'
						onClick={e => setSection('repositories')}>
						Repositories
					</Link>
					<Link
						to='/developers'
						className={Section === 'developers' ? 'btn btn-active' : 'btn'}
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
