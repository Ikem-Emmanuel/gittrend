import {StyledCard} from '../../styles/Card.styled';
import {Link} from 'react-router-dom';
import {Filters} from './FIlters';
import {useState} from 'react';

function Card() {
	const [Section, setSection] = useState('repositories');
	return (
		<StyledCard>
			<div className='card-header'>
				<div>
					<div className='btn-group'>
						<Link
							to='/#'
							className={Section === 'repositories' ? 'btn btn-active' : 'btn'}
							type='button'
							onClick={e => setSection('repositories')}>
							Repositories
						</Link>
						<Link
							to='/#'
							className={Section === 'developers' ? 'btn btn-active' : 'btn'}
							type='button'
							onClick={e => setSection('developers')}>
							Developers
						</Link>
					</div>
				</div>
				<div>
					<Filters />
				</div>
			</div>
			<div className='card-body'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos exercitationem
				aliquam, cum veritatis suscipit excepturi? Magni laudantium ducimus quia eveniet,
				commodi a mollitia, modi officiis tenetur facere non fugit deserunt deleniti
				blanditiis dignissimos? Harum doloribus corporis animi accusamus nulla accusantium,
				provident ipsa voluptas repellendus veniam quidem temporibus delectus aliquam nobis
				repudiandae exercitationem laboriosam reprehenderit sapiente vitae? Officia odio
				laborum atque expedita quas, ex quasi pariatur commodi iste? Quo porro est saepe,
				mollitia ducimus fugit quia sunt voluptate laboriosam aliquam, inventore delectus
				obcaecati molestias excepturi nam nulla pariatur incidunt iure recusandae dolore
				odio. Cum qui iure neque eligendi. Repellendus inventore ipsam quia unde natus illum
				numquam, doloremque non et esse excepturi ratione deleniti reiciendis harum atque
				aliquid asperiores neque voluptate.
			</div>
		</StyledCard>
	);
}

export default Card;
